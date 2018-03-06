const userCtrl = require('../controllers/userCtrl');
const sessionCtrl = require('../controllers/sessionCtrl');
const stripeCtrl = require('../controllers/stripeCtrl');

module.exports = function (app){
  //login routes
  app.get('/api/login', userCtrl.login)
  app.post('/api/signup', user)

  //session object routes
  app.get('/api/session', sessionCtrl.getSession)
  app.get('/api/cart', sessionCtrl/getCart)

  //stripe/credit card routes
  app.post('/api/stripeCharge', stripeCtrl.charge )
}
