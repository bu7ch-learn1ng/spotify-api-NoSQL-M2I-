const { mongoose, Schema } = require("mongoose");

const albumSchema = new Schema({
  name: String,
  artiste : String,
  pistes: [{ type: Schema.Types.ObjectId, ref: "Piste" }],
});

const Album = mongoose.model("Album", albumSchema);

module.exports = Album;
