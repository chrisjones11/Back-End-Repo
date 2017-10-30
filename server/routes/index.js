const router = require("express").Router();
const { fetchHome, fetchMatch } = require("../controllers/index");

router.get("/", fetchHome);

router.get("/match/:matchid", fetchMatch);

module.exports = router;
