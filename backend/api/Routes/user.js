'use strict';
module.exports = function(express)
{
    var router = express.Router();

    var UserController = require('../Controllers/UserController');

    router.post('/add-user', UserController.addUser);

    return router;
}