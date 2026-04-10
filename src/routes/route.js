const express = require('express');
const router = express.Router();
const serviceMap = require('../index');
const { handleRequest } = require('../controller/gatewayController');

router.get('/health', (req, res) => {
  res.json({ status: 'ok', service: 'api-gateway' });
});

router.use('/token', (req, res, next) => {
  const base = serviceMap.token;
  if (!base) return res.status(503).json({ error: 'token-service URL not configured' });
  req.targetUrl = base + req.originalUrl.replace('/token', '');
  next();
}, handleRequest);

router.use('/loyalty', (req, res, next) => {
  const base = serviceMap.loyalty;
  if (!base) return res.status(503).json({ error: 'loyalty-service URL not configured' });
  req.targetUrl = base + req.originalUrl.replace('/loyalty', '');
  next();
}, handleRequest);

module.exports = router;