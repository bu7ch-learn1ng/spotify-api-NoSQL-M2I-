const { mongoose, Schema } = require("mongoose");

const albumSchema = new Schema({
  Titre: { type: String, required: true },
  AnneeSortie: { type: Number, required: true },
  ID_Artiste: { type: mongoose.Schema.Types.ObjectId, ref: 'Artiste', required: true },
  Pistes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Piste' }],
});

const Album = mongoose.model("Album", albumSchema);

module.exports = Album;
