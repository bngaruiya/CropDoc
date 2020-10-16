const mongoose = require('mongoose');

const plantDiseaseSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    plantId: { type: mongoose.Schema.Types.ObjectId, ref: 'Plant' },
    symptoms: [{ type: String }],
    causalAgent: [{ type: String }],
    envFactors: [{ type: String }],
    mitigation: [{ type: String }],
    solutions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Solution' }],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('PlantDisease', plantDiseaseSchema);
