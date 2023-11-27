const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = process.env.PORT || 4567;

const userRoute = require("./routes/userRoute");
const playlistRoute = require("./routes/playlistRoute");
const pisteRoute = require("./routes/pisteRoute");
const albumRoute = require("./routes/albumRoute");
const artisteRoute = require("./routes/artisteRoute");
main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/spotify_api");
  console.log(`[DATABASE] MongoDB is connected !!!`);
}
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api/v1/users", userRoute);
app.use("/api/v1/playlists", playlistRoute);
app.use("/api/v1/pistes", pisteRoute);
app.use("/api/v1/albums", albumRoute);
app.use("/api/v1/artistes", artisteRoute);

app.listen(port, () => {
  console.log(`SERVER is running on port ${port}`);
});
