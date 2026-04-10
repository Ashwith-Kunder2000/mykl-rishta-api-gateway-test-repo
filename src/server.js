require('dotenv').config();
const app = require('./app');

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`[api-gateway] Running on port ${PORT} — env: ${process.env.NODE_ENV}`);
});

/*
api-gateway/
├── src/
│   ├── app.js
│   ├── server.js
│   ├── index.js
│   ├── routes/
│   │   └── index.js
│   ├── controller/
│   │   └── gatewayController.js
│   └── utils/
│       └── requestHelper.js
├── .env
├── .gitignore
├── .npmrc
├── package.json
└── Procfile
*/