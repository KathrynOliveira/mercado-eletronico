import express from "express";
import axios from "axios";
import cors from "cors";
import serverless from "serverless-http";

const app = express();

app.use(cors({
  origin: [
    'https://https://mercado-eletronico.vercel.app/',
    'http://localhost:5173'
  ]
  // methods: ['GET'], // Métodos permitidos
  // allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());

// const axiosInstance = axios.create({
//   headers: {
//     'Content-Type': 'application/json',
//     'Accept': 'application/json'
//   },
//   timeout: 5000 // timeout de 5 segundos
// });

// Rota proxy
app.get("/api/orders/1", async (req, res) => {
  try {
    const response = await axios.get("https://api.mercadoe.space/orders/1");
    res.json(response.data);
  } catch (err) {
    if (err.response) {
      // Erro da API
      res.status(err.response.status).json({
        error: err.response.data,
        status: err.response.status
      });
    } else if (err.request) {
      // Erro de conexão
      res.status(503).json({
        error: "Serviço indisponível",
        details: err.message
      });
    } else {
      // Outros erros
      res.status(500).json({
        error: "Erro interno",
        details: err.message
      });
    }
  }
});

// 👉 Exporta para Vercel
export const handler = serverless(app);

// 👉 Exporta para rodar localmente
export default app;
