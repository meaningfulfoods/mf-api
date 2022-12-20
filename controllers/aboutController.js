const About = require("../models/aboutModel")

exports.aboutGet = async (req, res) => {
  try {
    const query = await About.find({}, {__v:0})
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

exports.address = async (req, res) => {
  try {
    const { address } = req.body
    const query = await About.updateOne({ address: address })
    if (query.acknowledged) {
      return res.json({ success: query.acknowledged, data: 'Address Updated Successfully' })
    }
    res.status(406).json({ success: false, msg: 'failed' })
  } catch (err) {
    res.status(400).json({
      success: false,
      msg: err.msg,
    });
  }
};

exports.socialLinks = async (req, res) => {
  try {
    const socialLinks = JSON.stringify(req.body.socialLinks);
    const query = await About.updateOne({ socialLinks: socialLinks })
    if (query.acknowledged) {
      return res.json({ success: query.acknowledged, data: 'socialLinks Updated Successfully' })
    }
    res.status(406).json({ success: false, msg: 'failed' })
  } catch (err) {
    res.status(400).json({
      success: false,
      msg: err.msg,
    });
  }
};

exports.footerEnd = async (req, res) => {
  try {
    const { footerEnd } = req.body
    const query = await About.updateOne({ footerEnd: footerEnd })
    if (query.acknowledged) {
      return res.json({ success: query.acknowledged, data: 'Footer End Updated Successfully' })
    }
    res.status(406).json({ success: false, msg: 'failed' })
  } catch (err) {
    res.status(400).json({
      success: false,
      msg: err.msg,
    });
  }
};

exports.footerCustomService = async (req, res) => {
  try {
    const { description } = req.body
    const query = await About.updateOne({ description: description })
    if (query.acknowledged) {
      return res.json({ success: query.acknowledged, data: 'Footer Custom Service Updated Successfully' })
    }
    res.status(406).json({ success: false, msg: 'failed' })
  } catch (err) {
    res.status(400).json({
      success: false,
      msg: err.msg,
    });
  }
};


