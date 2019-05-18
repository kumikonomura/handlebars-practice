// requiring our express library
const { Router } = require('express')

const router = Router()

router.get('/', (req, res) => {
  return res.render('index')
})

router.get('/milkshakes', (req, res) => {
  return res.render('milkshakes')
})

module.exports = router
