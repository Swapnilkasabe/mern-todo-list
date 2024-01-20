import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import Routes from './routes/routes.js'
const app = express();

import Connection from './database/db.js';
Connection();

// CORS middleware configuration
app.use(cors());
// Body parser middleware
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/', Routes);
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Internal Server Error');
  });
  

// Custom middleware to handle CORS headers for actual requests
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.header('Access-Control-Allow-Credentials', true);
  next();
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
