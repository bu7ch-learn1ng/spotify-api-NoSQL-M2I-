const Piste = require("../models/pisteModel");
const newPiste = async (req, res) => {
  try {
    const newPiste = new Piste(req.body);
    await newPiste.save();
    res.json(newPiste);
  } catch (error) {
    res.json({ message: error.message });
  }
};
const allPistes = async (req, res) => {
  try {
    let allpistes = await Piste.find();
    res.json(allpistes);
  } catch (error) {
    console.error({ message: error.message });
  }
};

module.exports = { newPiste, allPistes };
