const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
	id: {
		type: String,
		required: true
	},
	city: {
		type: String,
		required: true
	},
	location: [
        {
            latitude: {
                type: String,
                default: '0',
		        required: true,
            },
            longitude: {
                type: String,
                default: '0',
		        required: true,
            }
		}
	],
	updated: {
		type: String,
		required: true,
		default: Date.now
	},
	created: {
		type: String,
		required: true,
		default: Date.now
	}
});

Schema.set('versionKey', false);

const Locations = mongoose.model('Locations', Schema);

module.exports = { Locations };