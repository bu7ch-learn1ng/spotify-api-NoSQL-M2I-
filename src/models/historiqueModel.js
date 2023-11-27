const historiqueEcouteSchema = new mongoose.Schema({
  ID_user: { type: mongoose.Schema.Types.ObjectId, ref: 'Utilisateur', required: true },
  ID_Piste: { type: mongoose.Schema.Types.ObjectId, ref: 'Piste', required: true },
  Date_Ecoute: { type: Date, default: Date.now },
});

module.exports = mongoose.model('HistoriqueEcoute', historiqueEcouteSchema);