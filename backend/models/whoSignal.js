const mongoose = require('mongoose');

const whoSignalSchema = mongoose.Schema(
  {
    signal: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('WhoSignal', whoSignalSchema);
