const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.database, process.env.user, process.env.password, {
  host: process.env.host,
  port: process.env.port,
  dialect: 'postgres',
});

async function apiOfPostgres(query, values) {
  try {
    await sequelize.authenticate(); // Test connection
    const data = await sequelize.query(query, { replacements: values, type: sequelize.QueryTypes.SELECT });
    return data;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to execute Postgres query');
  }
}

module.exports = apiOfPostgres;
