const express = require('express')
const cors = require('cors')

const app = express()

app.use(
  cors({
    origin: '*',
  })
)

app.use(express.json())

app.get('/services', (req, res) => {
  res.status(200).send({
    hello: 'HHHELLO',
  })
})

app.post('/requested-service', (req, res) => {
  const { id, name } = req.body

  res.status(200).send({
    wierderId: id,
    wierdName: name,
  })
})

app.listen(4000, () => {
  console.log('WEB app has started')
})
