const { newPiste, allPistes } = require("../controllers/pisteController");

const router = require("express").Router();

router.post("/new", newPiste);
router.get("/all", allPistes)

module.exports = router;
