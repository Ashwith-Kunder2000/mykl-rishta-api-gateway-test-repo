const axios = require('axios');

const forwardRequest = async (method, url, data, headers) => {
  const forwardHeaders = { ...headers };
  delete forwardHeaders['host'];
  delete forwardHeaders['content-length'];

  const response = await axios({
    method,
    url,
    data,
    headers: forwardHeaders,
    timeout: 10000
  });

  return response;
};

module.exports = { forwardRequest };