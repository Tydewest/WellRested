const router = require('express').Router();
const Default = require('../Controllers/Default');
const Create = require('../Controllers/Create');
const Fetch = require('../Controllers/Fetch');
const FetchID = require('../Controllers/FetchID');
const Delete = require('../Controllers/Delete');
const Status = require('../Controllers/Status');
const Uncaught = require('../Controllers/Uncaught');

// Default Route
router.route('/')
	.get(Default.get);

// Status Route
router.route('/status')
	.get(Status.get);

// Create Route
router.route('/create')
	.post(Create.post);

// Fetch Route
router.route('/fetch')
	.get(Fetch.get);

//Fetch By ID Route
router.route('/:id')
	.get(FetchID.get);

// Detete Route
router.route('/:id')
	.delete(Delete.delete);

//Uncaught Route
router.route('*')
	.get(Uncaught.get);

// Export API routes
module.exports = router;