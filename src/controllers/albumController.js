const Album = require("../models/albumModel");

const allAlbums = async (req, res) => {
  try {
    let albums = await Album.find();
    res.json(albums);
  } catch (error) {
    console.error(error);
  }
};
const postAlbum = async (req, res) => {
  try {
    let newAlbum = await new Album(req.body);
    res.json(newAlbum);
  } catch (error) {
    console.error(error);
  }
};
const putAlbum = async (req, res) => {
  try {
    let album = await Album.findOneAndUpdate({_id: req.params.id}, req.body)
    res.json(album)
  } catch (error) {
    console.error({message: error.message})
  }
};
const removeAlbum = async (req, res) => {
  try {
    await Album.findOneAndDelete({_id:req.params.id})
  } catch (error) {
    console.error({message: error.message})
  }
};

module.exports = { allAlbums, postAlbum, putAlbum, removeAlbum };
