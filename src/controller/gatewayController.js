const { forwardRequest } = require('../utils/requestHelper');

const handleRequest = async (req, res) => {
  try {
    const targetUrl = req.targetUrl;

    if (!targetUrl) {
      return res.status(500).json({ error: 'Target service URL not resolved.' });
    }

    const response = await forwardRequest(
      req.method,
      targetUrl,
      req.body,
      req.headers
    );

    return res.status(response.status).json(response.data);
  } catch (err) {
    if (err.response) {
      return res.status(err.response.status).json({
        error: err.response.data || 'Downstream service error'
      });
    }
    return res.status(503).json({
      error: 'Service unavailable',
      message: err.message
    });
  }
};

module.exports = { handleRequest };