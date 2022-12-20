const express = require("express");
const router = express.Router();
const { bannerAdd, bannerGet } = require("../controllers/bannerController");
const { bannerV } = require('../middlewares/validators');
// const { isAuthenticated } = require('../middlewares/auth');



router.route("/banner").get(bannerGet)
router.route("/banner").post(bannerV, bannerAdd)
module.exports = router;