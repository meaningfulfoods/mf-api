const Product = require("../models/productModel")

exports.productAdd = async (req, res) => {
  try {
    const { title, description } = req.body
    const data = new Product({
      title: title,
      description: description
    });
    const query = await data.save()
    if (query._id) {
      return res.json({ success: true, data: 'Product Uploaded Successfully' })
    }
    res.status(406).json({ success: false, msg: 'failed' })
  } catch (err) {
    res.status(400).json({
      success: false,
      msg: err.msg,
    });
  }
};

exports.productGet = async (req, res) => {
  try {
    const query = await Product.find({}, { __v: 0 })
    if (Object.keys(query).length) {
      return res.json({ success: true, data: query })
    }
    res.status(400).json({ success: false })
  } catch (err) {
    res.status(400).json({
      success: false,
      msg: err.msg,
    });
  }
};


