const mongoose = require('mongoose');

const predictionSchema = mongoose.Schema(
  {
    imageUrl: { type: String, required: true },
    predictionId: { type: mongoose.Schema.Types.ObjectId, ref: 'PlantDisease' },
    uploadedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Prediction', predictionSchema);
