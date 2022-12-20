const express = require("express");
const router = express.Router();
const { productAdd,productGet } = require("../controllers/productController");
const { bannerV } = require('../middlewares/validators');
// const { isAuthenticated } = require('../middlewares/auth');



router.route("/product").get( productGet)
router.route("/product").post(bannerV, productAdd)
module.exports = router;