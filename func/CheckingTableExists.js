let { Client } = require('pg')

const CheckingTableExists = async () => {
  const client = new Client({
    user: process.env.user,
    host: process.env.host,
    database: process.env.database,
    password: process.env.password,
    port: process.env.port,
  })

  try {
    return await client.connect()
      .then(() => client.query(`SELECT table_name
      FROM information_schema.tables
      WHERE table_schema = 'public'
      AND table_name = 'tasks';`))
  } catch (error) {
    console.error(error.stack)
    return false

  } finally {
     client.end() // closes connection
  }
}




async function check() {
  let flag = false
  return CheckingTableExists().then((result) => {
  if(result.rows.length > 0){
    flag = true
  }
  
  })
  .then(async()=>{
    if (!flag) {
         console.log('table_name does not exist')
        return false
      } else {
          console.log('table_name exists')
        return true
      }
  })
}

module.exports = check