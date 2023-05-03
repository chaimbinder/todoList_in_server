const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(
  process.env.database,
  process.env.user,
  process.env.password,
  {
    dialect: 'postgres',
    port: process.env.port
  }
);


const Task = sequelize.define('tasks', {
  taskid: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    unique: true,
  },
  name_task: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING
  },
  priority_level: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  active: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: Sequelize.literal('NOW()')
  }
} 
);

Task.sync()
  .then(() => {
    console.log("Todos table created successfully");
  })
  .catch((error) => {
    console.error("Error creating Todos table:", error);
  });
  
  
function findAll() {
  return Task.findAll();;
}

function findById(id) {
  return Task.findByPk(id);
}

const createTask = (dataToAdd) => {
  return Task.create(dataToAdd);;
}

function deleteTaskById(id) {
  return Task.destroy({ where: { taskid: id } }) ;
}

function editeTaskById(data, id) {
  return Task.update(data,{ where: { taskid: id } } );;
}


(async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();

module.exports = { editeTaskById, deleteTaskById, createTask, findById, findAll };
