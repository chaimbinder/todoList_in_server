const express = require('express')
var cors = require('cors')

const app = express()
require("dotenv").config()

app.use(express.json())
app.use(cors())
let mainRoutes = require("./routes/mainRoutes/mainRoutes")

mainRoutes(app)

const port = process.env.MYPORT || 3010

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
