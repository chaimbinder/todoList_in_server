const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.database, process.env.user, process.env.password, {
  host: process.env.host,
  port: process.env.port,
  dialect: 'postgres'
});

const Task = sequelize.define('Task', {
  taskid: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name_task: {
    type: Sequelize.TEXT
  },
  description: {
    type: Sequelize.TEXT
  },
  priority_level: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  active: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  }
}, {
  tableName: 'tasks',
  timestamps: false
});

async function check() {
  try {
    await Task.sync();
    console.log('Table Sequelize exists');
    return true;
  } catch (error) {
    console.error(error.stack);
    console.log('Table Sequelize does not exist');
    return false;
  }
}

module.exports = check;