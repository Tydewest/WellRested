const moment = require('moment');

exports.get = async (request, response) => {
	try {
		response.status(301);
		response.redirect(`https://wellrested.vercel.app/`)
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
		console.log(`New Request Made To Default Route From: ${remoteAddress}`);
	}
};
