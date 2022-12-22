const express = require('express')
const cors = require('cors')

const app = express()

app.use(
  cors({
    origin: '*',
  })
)

app.get('/services', (req, res) => {
  res.status(200).send({
    hello: 'HHHELLO',
  })
})

app.push('/requested-service', (req, res) => {
  const { name } = req.body

  res.status(200).send({
    success: name,
  })
})

app.listen(4000, () => {
  console.log('WEB app has started')
})
