const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

app.get('/', (req, res) => {
  res.send('This will receive webhooks')
})

app.post('/notifications', (req, res) => {
  console.log(req.body)
  res.status(200).end()
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
