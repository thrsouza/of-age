module.exports = {
  ageValidate: (req, res, next) => {
    const age = Number(req.query.age)
    if (age) return next()
    return res.redirect('/')
  }
}
