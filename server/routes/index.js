const router = require('express').Router();
const { fetchHome, fetchMatch, placeBets, fetchBetslip, fetchMatchResultBets, fetchUser} = require('../controllers/index');

router.get('/', fetchHome);

router.get('/match/:matchid', fetchMatch);

router.post('/placedBets', placeBets);

router.get('/betslip', fetchBetslip);

router.get ('/user', fetchUser);

router.get('/results/:matchid', fetchMatchResultBets);

module.exports = router;
