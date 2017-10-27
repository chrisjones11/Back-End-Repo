const router = require('express').Router();
const { fetchHome } = require('../controllers/index');

router.get('/', fetchHome);

module.exports = router;
