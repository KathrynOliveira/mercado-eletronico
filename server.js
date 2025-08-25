import app from "./api/orders/index.js";

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Proxy rodando em http://localhost:${PORT}`);
});
