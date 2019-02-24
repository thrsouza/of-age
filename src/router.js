module.exports = {
  routes: {
    form: (req, res) => {
      res.render('form')
    },

    check: (req, res) => {
      const age = Number(req.body.age)

      if (age >= 18) {
        return res.redirect(`/major?age=${age}`)
      }
      return res.redirect(`/minor?age=${age}`)
    },

    major: (req, res) => {
      res.render('major', { age: req.query.age })
    },

    minor: (req, res) => {
      res.render('minor', { age: req.query.age })
    }
  }
}
