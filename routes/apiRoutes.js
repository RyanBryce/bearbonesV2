const userCtrl = require('../controllers/userCtrl');
const sessionCtrl = require('../controllers/sessionCtrl');
module.exports = function (app){
  //login routes
  app.get('/api/login', userCtrl.login)
  app.post('/api/signup', user)

  //

}
