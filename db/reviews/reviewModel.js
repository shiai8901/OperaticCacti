var Sequelize = require('sequelize');
var db = require('../index.js');

var Review = db.define('review', {
	content: {
		type: Sequelize.STRING
	},
	id_users: {
		type: Sequelize.INTEGER,
		model: 'user',
		key: 'id'
	},
	id_tour: {
		type: Sequelize.INTEGER,
		model: 'tour',
		key: 'id'
	}
});

module.exports = Review;