const {
  allAlbums,
  removeAlbum,
  putAlbum,
  postAlbum,
} = require("../controllers/albumController");

const router = require("express").Router();

router.get("/", allAlbums);
router.post("/new", postAlbum);
router.put("/:id/edit", putAlbum);
router.delete("/:id/destroy", removeAlbum);

module.exports = router;
