import express from "express";
import axios from "axios";
import cors from "cors";
import serverless from "serverless-http";

const app = express();

app.use(cors({
  origin: [
    'https://mercado-eletronico.vercel.app/',
    'http://localhost:5173'
  ]
}));
app.use(express.json());

// Rota proxy
app.get("/api/orders/1", async (req, res) => {
  try {
    const response = await axios.get("https://api.mercadoe.space/orders/1");
    res.json(response.data);
  } catch (error) {
    console.error("Erro na requisição:", error.message);

    if (error.response) {
      // Erro vindo da API (status 4xx ou 5xx)
      return res.status(error.response.status).json({
        error: error.response.data?.message || "Erro na API externa",
        status: error.response.status,
      });
    }

    if (error.request) {
      // Erro de rede ou timeout
      return res.status(503).json({
        error: "Serviço indisponível",
        details: error.message,
      });
    }

    // Erro inesperado
    res.status(500).json({
      error: "Erro interno do servidor",
      details: error.message,
    });
  }
});

// 👉 Exporta para Vercel
export const handler = serverless(app);

// 👉 Exporta para rodar localmente
export default app;
