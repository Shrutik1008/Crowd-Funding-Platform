const express = require("express");
const router = express.Router();

router.use("/campaign", require("./campaign"));
router.use("/user", require("./user"));
router.use("/payment", require("./payment"));
router.use("/donation", require("./donation"));
router.use("/query", require("./query"));

module.exports = router;
