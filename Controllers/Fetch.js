const { Locations } = require('../Models/Locations');
const moment = require('moment');

exports.get = async (request, response) => {
	try {
		const FetchedLocations = await Locations.find();
		if (FetchedLocations === null) {
			response.status(204);
			response.json({
				Message: 'No Locations Found.',
				Timestamp: moment().format('MM/DD/YYYY HH:mm:ss'),
			});
		} else {
			response.status(200);
			response.json({
				Message: 'Locations Retrived.',
				Timestamp: moment().format('MM/DD/YYYY HH:mm:ss'),
				Data: FetchedLocations
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
		console.log(`Request Made To Fetch Route From: ${remoteAddress}`);
	}
};