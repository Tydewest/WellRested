const { Locations } = require('../Models/Locations');
const moment = require('moment');

exports.get = async (request, response) => {
	try {
		const { id } = request.params;
		const RequestedLocation = await Locations.find({ id: `${id}` });
		if (RequestedLocation === null) {
			response.status(204);
			response.json({
				Message: 'Location Not Found',
				Timestamp: moment().format('MM/DD/YYYY HH:mm:ss'),
			});
		} else {
			response.status(200);
			response.json({
				Message: 'Location Retrived',
				Timestamp: moment().format('MM/DD/YYYY HH:mm:ss'),
				Data: RequestedLocation
			});
		}
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
		console.log(`Request Made To Fetch ID Route From: ${remoteAddress}`);
	}
};