const Banner = require("../models/bannerModel")

exports.bannerAdd = async (req, res) => {
  try {
    const { title, description } = req.body
    const data = new Banner({
      title: title,
      description: description
    });
    const query = await data.save()
    if (query._id) {
      return res.json({ success: true, data: 'Banner Uploaded Successfully' })
    }
    res.status(406).json({ success: false, msg: 'failed' })
  } catch (err) {
    res.status(400).json({
      success: false,
      msg: err.msg,
    });
  }
};

exports.bannerGet = async (req, res) => {
  try {
    const query = await Banner.find({}, {__v:0})
    if (Object.keys(query).length) {
      return res.json({ success: true, data: query })
    }
    res.status(404).json({ success: false, msg: 'empty' })
  } catch (err) {
    res.status(400).json({
      success: false,
      msg: err.msg,
    });
  }
};


