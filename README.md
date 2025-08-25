# Mercado Eletrônico - Frontend

![Vue 3](https://img.shields.io/badge/Vue-3.2.45-brightgreen?logo=vue.js)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.3.3-blue?logo=tailwind-css)
![Vitest](https://img.shields.io/badge/Vitest-0.34.0-orange)

Frontend do sistema **Mercado Eletrônico**, desenvolvido em **Vue 3**, com integração a uma API REST para gerenciar pedidos (orders), fornecedores (suppliers) e endereços (Address).

---

## 🛠️ Tecnologias utilizadas

- **Framework:** Vue 3   
- **Estilização:** Tailwind CSS    
- **Backend:** Node + Express
- **Testes unitários:** Vitest + Vue Test Utils   

## 📦 Funcionalidades

- Listagem de pedidos com detalhes do comprador, fornecedor e endereços  
- Layout Responsivo 
- Componentes reutilizáveis
- Skeleton loader enquanto os dados são carregados  
- Manipulação de erros em requisições fetch  
- Testes unitários simulando respostas da API e renderização do componente  
- Proxy backend via Express para contornar bloqueio de CORS em localhost:
  - Um servidor Node/Express faz as requisições para a API externa  
  - O frontend consome os dados do Express, evitando bloqueio de CORS no navegador  
  - Permite desenvolver localmente sem depender de permissões CORS da API externa


## 🚀 Como clonar e rodar o projeto

1. Clone o repositório:

```bash
git clone git@github.com:KathrynOliveira/mercado-eletronico.git
```

2. Entre na pasta do projeto:
```bash
cd mercado-eletronico
```

3. Instale as dependências:
 ```bash
npm install
```  

4. Crie um arquivo .env com a URL da API:
```bash
VITE_API_URL=https://sua-api.com
```

5. Rode a aplicação:
```bash
npm run dev && node server.js
``` 

1. Para rodar o teste unitário:
 ```bash
npm run test
```   

### 👩‍💻 Desenvolvido por:
[Kathryn Oliveira](https://github.com/KathrynOliveira)

---

