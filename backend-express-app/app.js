const express = require('express');
const bodyParser = require('body-parser');  // Example middleware
const apiRouter = require('./router');  // Example API route
// const logger = require('./middlewares/logger');  // Example middleware

const app = express();
const port = process.env.PORT || 3000;

// Apply middleware
app.use(bodyParser.json());  // Example middleware usage
// app.use(logger);

// Mount routes
app.use('/api/v1', apiRouter);  // Mount API routes at a specific path

app.listen(port, () => console.log(`Server listening on port ${port}`));
