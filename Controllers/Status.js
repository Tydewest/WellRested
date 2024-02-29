const moment = require('moment');
const crypto = require('crypto');

exports.get = async (request, response) => {
	try {
		response.status(200);
		response.json({
			Status: '200 - OK',
			Message: 'API Is Online.',
			Timestamp: moment().format('MM/DD/YYYY HH:mm:ss')
		});
		return;
	} catch (error) {
		response.status(500);
		response.json({
			Status: '500 - Internal Server Error',
			Message: 'Houston, we have a problem',
			Timestamp: moment().format('MM/DD/YYYY HH:mm:ss'),
			Error: error.message
		});
	} finally {
		const remoteAddress = (request.connection.remoteAddress);
		console.log(`New Request Made To Status Route From: ${remoteAddress}`);
	}
};
