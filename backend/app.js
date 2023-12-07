const express = require('express')
const app = express()
const cors = require("cors")
const Router = require("./router/routes")
const port = 3000
// const pool = require("./db")

app.use(express.json())
app.use(cors())

app.use("/", Router)

app.listen(port, () => console.log(` listening on port ${port}!`))