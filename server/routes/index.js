const router = require('express').Router();
const { fetchHome, fetchMatch, placeBets, fetchBetslip, fetchMatchResultBets} = require('../controllers/index');

router.get('/', fetchHome);

router.get('/match/:matchid', fetchMatch);

router.post('/placedBets', placeBets);

router.get('/betslip', fetchBetslip);

router.get('/results/:matchid', fetchMatchResultBets);

module.exports = router;
