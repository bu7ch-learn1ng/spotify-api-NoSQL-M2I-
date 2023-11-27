const Artiste = require("../models/artisteModel");
const allArtistes = async (req, res, next) => {
  try {
    let artistes = await Artiste.find();
    res.json(artistes);
  } catch (error) {
    console.error({ mesage: error.message });
  }
};
const postArtist =  async(req, res)=> {
  try {
    let newArtiste = await new Artiste(req.body);
    res.json(newArtiste);
  } catch (error) {
    res.json({ mesage: error.message });
  }
}

module.exports = { allArtistes, postArtist };
