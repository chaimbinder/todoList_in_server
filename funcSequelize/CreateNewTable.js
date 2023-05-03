const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(process.env.database, process.env.user, process.env.password, {
  host: process.env.host,
  port: process.env.port,
  dialect: 'postgres'
});

const Task = sequelize.define('Task', {
  taskid: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name_task: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT
  },
  priority_level: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  active: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  }
}, {
  tableName: 'TASKS',
  timestamps: false
});

const createTable = async () => {
  try {
    await sequelize.sync(); // creates table if not exist
    return true;
  } catch (error) {
    console.error(error.stack);
    return false;
  }
};

function create() {
  createTable().then((result) => {
    if (result) {
      console.log('CreateNewTable');
    }
  });
}

module.exports = create;
