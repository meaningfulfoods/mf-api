const express = require("express");
const router = express.Router();
const { footerCustomService, footerEnd, address, socialLinks,aboutGet } = require("../controllers/aboutController");
const { footerCustomServiceV, addressV, socialLinksV, FooterEndV } = require('../middlewares/validators');
// const { isAuthenticated } = require('../middlewares/auth');


router.route("/about").get(aboutGet)

router.route("/footerCustomService").post(footerCustomServiceV, footerCustomService)
router.route("/address").post(addressV, address)
router.route("/socialLinks").post(socialLinksV, socialLinks)
router.route("/footerEnd").post(FooterEndV, footerEnd)
module.exports = router;