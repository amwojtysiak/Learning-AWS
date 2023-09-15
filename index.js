const express = require('express')
const app = express()
const port = process.env.port || 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/2', (req, res) => {
    res.send('Hello World2!')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});