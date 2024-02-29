const express = require('express');
const cors = require('cors');
const DatabaseConfig = require('./Configuration/Database');
const Routes = require('./Routes/Routes');
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(cors());

const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || '3000';

app.use('/', Routes);

app.listen(PORT, () => {
	DatabaseConfig();
	console.log(`API Is Running Live At: http://${HOST}:${PORT}, Use Ctrl + C To Stop The Server.`);
});