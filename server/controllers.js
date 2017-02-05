var models = require('./models');

module.exports = {
  tours: {
    getAll: function(req, res) {
      models.tours.getAll(function(err, results) {
        if (err) {
          console.error(err);
        }
        res.json(results);
      });
    },
    getOne: function(req, res) {
      var TourId = req.params.id;
      models.tours.getOne(TourId, function(err, result) {
        if (err) {
          console.error(err);
        }
        res.json(result);
      });
    },
    post: function(req, res) {
      var params = [req.body.name, req.body.text]; // each tour property
      models.tours.post(params, function(err, results) {
        if (err) {
          console.error(err);
          res.sendStatus(501);
        }
        res.sendStatus(201);
      });
    }
  },
  users: {
    get: function(req, res) {
      var username = req.params.username;
      models.users.get(username, function(err, result) {
        if (err) {
          console.error(err);
        }
        res.json(result);
      });
    },
    post: function(req, res) {
      var params = [req.params.username, req.params.password];
      models.users.post(params, function(err, result) {
        if (err) {
          console.error(err)
        }
        res.sendStatus(201);
      });
    }
  },
  reviews: {}
}