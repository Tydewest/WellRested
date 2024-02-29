const { Locations } = require('../Models/Locations');
const moment = require('moment');

exports.delete = async (request, response) => {
	try {
		const { id } = request.params;
		const DeletedLocation = await Locations.findByIdAndDelete(id);
		if (DeletedLocation === null) {
			response.status(400);
			response.json({
				Message: 'Location Not Found.',
				Timestamp: moment().format('MM/DD/YYYY HH:mm:ss'),
			});
		} else {
			response.status(200);
			response.json({
				Message: 'Location Deleted.',
				Timestamp: moment().format('MM/DD/YYYY HH:mm:ss'),
				Data: DeletedLocation
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
		console.log(`Request Made To Delete Route From: ${remoteAddress}`);
	}
};