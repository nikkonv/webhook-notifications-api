const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

app.get('/', (req, res) => {
  const now = new Date()
  res.status(200).json({ message: 'This will receive webhooks', date: now })
})

app.post('/notifications', (req, res) => {
  console.log(req.body)
  if (req.body['event-data'].message)
    console.log('message headers', req.body['event-data'].message.headers)
  res.status(200).end()
})

app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
