// const product = require('./product');
const { v4: uuidv4 } = require('uuid');

exports.createProduct = async (req, res) => {
  try {
    // options = { upsert: true, new: true, setDefaultsOnInsert: true };

    // const savedProduct = await product.findOneAndUpdate(
    //   { uniqueId: req.body.uniqueId },
    //   req.body, options);

    res.json({ status: 'success', uploadId: uuidv4(), code: '200' });
  } catch (err) {
    console.err('Error while saving product', err);
    res.status(500).json({error: err.message});
  }
}