let { Client } = require('pg')

let database = process.env.database

const CheckingIsDatabase = async () => {
  const client = new Client({
    user: process.env.user,
    host: process.env.host,
    password: process.env.password,
    port: process.env.port,
  })

  try {
    return await client
    .connect()
      .then(() => client.query('SELECT datname FROM pg_catalog.pg_database'))
  } catch (error) {
    console.error(error.stack)
    return false
  } finally {
     client.end() // closes connection
    
  }
}

async function check() {
  let flag = false
  return CheckingIsDatabase().then((result) => {
    let temp = []
    Object.values(result.rows).forEach((value) => temp.push(value.datname))
    console.log(temp)
    temp.map((itme) => {
      if (database == itme) {
        flag = true
      }
    })

  })
  .then(async()=>{
    if (!flag) {
         console.log('Database does not exist')
        return false
      } else {
          console.log('Database exists')
        return true
      }
  })
}

module.exports = check
