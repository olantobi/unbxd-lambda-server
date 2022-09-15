// const product = require('./product');
const { v4: uuidv4 } = require('uuid');

exports.createProduct = async (req, res) => {
  try {
    // options = { upsert: true, new: true, setDefaultsOnInsert: true };

    // const savedProduct = await product.findOneAndUpdate(
    //   { uniqueId: req.body.uniqueId },
    //   req.body, options);
    console.log(`processing for ${req.body.uniqueId}`);
    if (req.body.uniqueId == '23810') {
      console.log(req.body);
    }
    res.json({ status: 'success', uploadId: uuidv4(), code: '200' });
  } catch (err) {
    console.err('Error while saving product', err);
    res.status(500).json({error: err.message});
  }
}