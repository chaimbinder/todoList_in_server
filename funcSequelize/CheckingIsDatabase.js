const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.database, process.env.user, process.env.password, {
  host: process.env.host,
  port: process.env.port,
  dialect: 'postgres'
});

const checkDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    return true;
  } catch (error) {
    console.error('Unable to connect to the database:', error);
    return false;
  }
};

async function check() {
  const databaseExists = await checkDatabase();
  if (!databaseExists) {
    console.log('Database Sequelize does not exist');
    return false;
  } else {
    console.log('Database Sequelize exists');
    return true;
  }
}

module.exports = check;
