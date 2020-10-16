const mongoose = require('mongoose');

const solutionSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    applicationRate: { type: String },
    producedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'Business' },
    solutionFor: [
      { type: mongoose.Schema.Types.ObjectId, ref: 'PlantDisease' },
    ],
    solutionSeller: [
      { type: mongoose.Schema.Types.ObjectId, ref: 'SellerDetail' },
    ],
    solutionType: { type: mongoose.Schema.Types.ObjectId, ref: 'SolutionType' },
    whoClassRef: { type: mongoose.Schema.Types.ObjectId, ref: 'WhoClass' },
    whoSignalRef: { type: mongoose.Schema.Types.ObjectId, ref: 'WhoSignal' },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Solution', solutionSchema);
