const proxy = require('express-http-proxy')
const path = require('path')
const express = require('express')
const app = express()

app.use(express.static('public'))
app.use('/api', proxy('localhost:5000'))

app.get('/', (req, res) => {
  res.sendFile(path.join(`${__dirname}/views/index.html`))
})

app.listen(3000)
