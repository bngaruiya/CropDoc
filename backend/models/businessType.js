const mongoose = require('mongoose');

const businessTypeSchema = mongoose.Schema(
  {
    type: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('BusinessType', businessTypeSchema);
