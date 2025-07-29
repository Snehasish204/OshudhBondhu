const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  medicines: [
    {
      medicine: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Medicine' // ✅ This is necessary for populate to work!
      },
      quantity: Number
    }
  ],
  status: {
    type: String,
    default: 'Pending'
  },
  expectedDelivery: {
    type: Date,
    default: null
  }
});

module.exports = mongoose.model('Order', orderSchema);
