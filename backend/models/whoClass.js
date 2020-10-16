const mongoose = require('mongoose');

const whoClassSchema = mongoose.Schema(
  {
    class: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('WhoClass', whoClassSchema);
