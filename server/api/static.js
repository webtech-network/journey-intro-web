// Serve o site (public/) também sob /diw, usado pelos links, iframes e
// data-base do frontend (ex.: /diw/apps/cidades/).
const express = require('express')
const path = require('path')

const router = express.Router()
router.use('/diw', express.static(path.join(__dirname, '..', '..', 'public')))

module.exports = router
