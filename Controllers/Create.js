const { Locations } = require('../Models/Locations');
const moment = require('moment');

exports.post = async (request, response) => {
	try {
		const NewLocation = new Locations({ ...request.body });
		const CreatedLocation = await NewLocation.save();
		response.status(201);
		response.json({
			Status: '201 - Created',
			Message: 'New Location Created.',
			Timestamp: moment().format('MM/DD/YYYY HH:mm:ss'),
			Data: CreatedLocation	
		});
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
		console.log(`Request Made To Create Route From: ${remoteAddress}`);
	}
};