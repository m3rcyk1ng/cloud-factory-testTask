const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const { createProxyMiddleware } = require('http-proxy-middleware');
require('dotenv').config();

// Create Express Server
const app = express();

// Configuration
const PORT = 3001;
const HOST = 'localhost';
const { API_BASE_URL } = process.env;

// Logging the requests
app.use(morgan('dev'));
app.use(cors());

// Proxy Logic :  Proxy endpoints
app.use(
  '/markets',
  createProxyMiddleware({
    target: API_BASE_URL,
    changeOrigin: true,
    pathRewrite: {
      '^/markets': 'markets/ticker24h',
    },
  }),
);

// Starting our Proxy server
app.listen(PORT, HOST, () => {
  console.log(`Starting Proxy at ${HOST}:${PORT}`);
});