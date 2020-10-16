const mongoose = require('mongoose');

const solutionTypeSchema = mongoose.Schema(
  {
    type: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('SolutionType', solutionTypeSchema);
