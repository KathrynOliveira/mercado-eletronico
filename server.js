// server.js
import express from 'express'
import axios from 'axios'
import cors from 'cors'

const app = express()
app.use(cors({
    origin: 'http://localhost:5173'
  }))
app.use(express.json())

// Rota proxy para pedidos
app.get('/api/orders/1', async (req, res) => {
  try {
    const response = await axios.get(`https://api.mercadoe.space/orders/1`)
    res.json(response.data)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

app.listen(3000, () => console.log('Proxy rodando em http://localhost:3000'))
