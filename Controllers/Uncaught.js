const moment = require('moment');

exports.get = async (request, response) => {
	try {
		response.status(404);
		response.json({
			Status: '404 - Page Not Found',
			Message: 'The Requested Resource Was Not Found.',
			Timestamp: moment().format('MM/DD/YYYY HH:mm:ss'),
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
		console.log(`New Request Made To Uncaught Route From: ${remoteAddress}`);
	}
};