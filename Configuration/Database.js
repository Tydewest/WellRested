const mongoose = require('mongoose');
require('dotenv').config();

const getConnection = async () => {
	try {
		mongoose.set('strictQuery', true);
		const connection = await mongoose.connect(`${process.env.MONGO_URI}`);
		if (connection) {
			console.log(`Database Sucessfully Connected! [${connection.connection.host}]`);
		} else {
			console.log('Failed To Connect To Database!');
		}
	} catch (error) {
		console.log(`Failed With Error: ${error.message}`);
	}
};

module.exports = getConnection; 