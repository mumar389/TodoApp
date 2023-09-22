const Item = require("../model/item");

//Rendering the home page-:
module.exports.home = async function (req, res) {
  const allItem = await Item.find({});
  return res.status(200).json({
    message: "Got Data",
    data: allItem,
  });
};
//Saving data to the database-:
module.exports.saveData = async function (req, res) {
  const newItems = await Item.create({
    content: req.body.content,
  });
  if (!newItems) {
    // console.log("Error in creating the item");
    return res.status(301).json({
      message: "Error",
    });
  }
  const allItem = await Item.find({});
  return res.status(200).json({
    message: "Data Saved Sucessfully",
    data:allItem
  });
};

//deleting from db

module.exports.erase = async function (req, res) {
  const ci = await Item.findByIdAndDelete(req.params.id);
  if (!ci) {
    return res.status(301).json({
      message: "Unable to delete",
    });
  }
  const allItem = await Item.find({});
  return res.status(200).json({
    message: "Delete Sucessfull",
    data:allItem
  });
};

//count:allItem.length()
