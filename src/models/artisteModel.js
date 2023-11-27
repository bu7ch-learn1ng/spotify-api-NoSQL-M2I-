const mongoose = require("mongoose");

const artisteSchema = new mongoose.Schema({
  Nom_Artiste: { type: String, required: true },
  Albums: [{ type: mongoose.Schema.Types.ObjectId, ref: "Album" }],
});

module.exports = mongoose.model("Artiste", artisteSchema);
