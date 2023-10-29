import setupRoutes from './routes/setupRoutes.js';

import express from 'express';
import nunjucks from 'nunjucks';

const app = express();
const router = express.Router();

const PORT = 8084;

import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

nunjucks.configure(__dirname + '/views', {
  autoescape: true,
  express: app
});


app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});

setupRoutes(router)