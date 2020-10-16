const mongoose = require('mongoose');

const sellerDetailSchema = mongoose.Schema(
  {
    solutionId: { type: mongoose.Schema.Types.ObjectId, ref: 'Solution' },
    sellerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Business' },
    quantity: { type: Number, required: true },
    price: { type: String, required: true },
    customerRating: { type: Number, required: true },
  },
  { timestamps: true }
);

sellerDetailSchema.createIndex(
  { solutionId: 1, sellerId: 1 },
  { unique: true }
);

module.exports = mongoose.model('SellerDetail', sellerDetailSchema);
