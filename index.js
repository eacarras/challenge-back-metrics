const cors = require('cors');
const path = require('path');
const dotenv = require('dotenv');
const express = require('express');

// Initialize dotenv and express server
const app = express();
dotenv.config({ path: path.join(__dirname, './.env') });

if (process.env.NODE_ENV !== 'production') {
  console.log('RUNNING IN TESTING MODE');
}

// enable cors
app.use(cors());
app.options('*', cors());

// Send back a 404 error for any unknown api request
app.use((_, res) => {
  return res.status(404).json({
    message: "The route requested was not found",
  });
});

app.listen(process.env.PORT, () => {
  console.log(`Listening to port ${process.env.PORT}`);
});
