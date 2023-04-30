let { Client } = require('pg')
let CheckingIsDatabase = require('../../func/CheckingIsDatabase')
let CreatingADatabase = require('../../func/CreatingADatabase')
let CreateNewTable = require('../../func/CreateNewTable')
let CheckingTableExists = require('../../func/CheckingTableExists')

async function CheckIfDBExists() {
  const There_is_such_a_database = await CheckingIsDatabase()
  if (!There_is_such_a_database) {
    await CreatingADatabase()
  } 

  if (There_is_such_a_database){
     const Checking_if_a_table_exists = await CheckingTableExists()
    if (!Checking_if_a_table_exists) {
      CreateNewTable()
    }
  }

}
CheckIfDBExists()



async function apiOfPostgres(query, VALUES) {
  const client = new Client({
    user: process.env.user,
    host: process.env.host,
    database: process.env.database,
    password: process.env.password,
    port: process.env.port,
  })

  try {
    await client.connect()
    const data = await client.query(query, VALUES)
    return data
  } catch (arr) {
    console.log(arr)
  } finally {
    client.end()
  }
}

module.exports = apiOfPostgres
