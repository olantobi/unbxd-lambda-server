const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const productSchema = new Schema({
  uniqueId: {
    type: Number,
    // required: true,
    // index: true
  },
  title: String
}, { strict: false });

// productSchema.index({uniqueId: Number});

module.exports = mongoose.model('products', productSchema);