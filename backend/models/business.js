const mongoose = require('mongoose');

// Create GeoSchema
const GeoSchema = new mongoose.Schema({
  type: {
    type: String,
    default: 'Point',
  },
  coordinates: {
    type: [Number],
    index: '2dsphere',
  },
});

const businessSchema = mongoose.Schema(
  {
    businessName: { type: String, required: true },
    businessTypeId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'BusinessType',
    },
    location: GeoSchema,
    email: { type: String, required: true, unique: true },
    phoneNumber: { type: String, required: true, unique: true },
    registeredBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Business', businessSchema);
