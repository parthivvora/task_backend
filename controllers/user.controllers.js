const userModel = require("../models/user.model");

// Insert Data
exports.insertData = async (req, res) => {
  try {
    console.log("🚀 ~ exports.insertData= ~ req.body:", req.body)
    await userModel.create(req.body);
    return res.status(200).json({
      status: "Success",
      message: "Data inserted successfully",
    });
  } catch (error) {
    console.log("🚀 ~ exports.insertData= ~ error:", error);
    return res.status(500).json({
      status: "Error",
      message: error.message,
    });
  }
};

// Listing Data
exports.getData = async (req, res) => {
  try {
    const dataListing = await userModel.find();
    return res.status(200).json({
      status: "Success",
      dataListing,
    });
  } catch (error) {
    console.log("🚀 ~ exports.getData= ~ error:", error);
    return res.status(500).json({
      status: "Error",
      message: error.message,
    });
  }
};
