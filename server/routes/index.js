const router = require('express').Router();
const { fetchHome, fetchMatch, placeBets } = require('../controllers/index');

router.get('/', fetchHome);

router.get('/match/:matchid', fetchMatch);

router.post('/placedBets', placeBets);

module.exports = router;
