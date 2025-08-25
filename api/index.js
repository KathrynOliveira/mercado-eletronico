import express from "express";
import axios from "axios";
import cors from "cors";
import serverless from "serverless-http";

const app = express();

// ⚠️ Ajuste o domínio conforme seu front em produção
app.use(cors({ origin: "*" }));
app.use(express.json());

// Rota proxy
app.get("/api/orders/1", async (req, res) => {
  try {
    const response = await axios.get("https://api.mercadoe.space/orders/1");
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 👉 Exporta para Vercel
export const handler = serverless(app);

// 👉 Exporta para rodar localmente
export default app;
