const mongoose = require('mongoose');

const unknownSchema = mongoose.Schema(
  {
    imageUrl: { type: String, required: true },
    plantId: { type: mongoose.Schema.Types.ObjectId, ref: 'Plant' },
    diseaseId: { type: mongoose.Schema.Types.ObjectId, ref: 'PlantDisease' },
    uploadedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Unknown', unknownSchema);
