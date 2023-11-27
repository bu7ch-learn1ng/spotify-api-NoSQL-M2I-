const { postArtist } = require('../controllers/artisteControler');

const router = require('express').Router();

router.post('/new',postArtist)


module.exports = router