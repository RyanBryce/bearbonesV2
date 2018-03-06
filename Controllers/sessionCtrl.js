module.exports = {
  getSession: function (req, res, next) {
    res.json(req.session.user)
  },
  getCart: function (req, res, next) {
    res.json(res.session.user.cart)
  }
}