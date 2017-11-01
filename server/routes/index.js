const router = require('express').Router();
const { fetchHome, fetchMatch, placeBets, fetchBetslip} = require('../controllers/index');

router.get('/', fetchHome);

router.get('/match/:matchid', fetchMatch);

router.post('/placedBets', placeBets);

router.get('/betslip', fetchBetslip);

module.exports = router;
