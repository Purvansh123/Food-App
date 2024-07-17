// const { default: UpdateMenu } = require("../../../foodi-client/src/pages/dashboard/admin/UpdateMenu");
const Menu = require("../model/Menu");

// Get all menu items
const getAllMenuItems = async (req, res) => {
  try {
    const menus = await Menu.find({}).sort({ createdAt: -1 });
    res.status(200).json(menus);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//post menu item
const postMenuItem = async (req, res) => {
  const newItem = req.body;
  try {
    const result = await Menu.create(newItem);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// delete a menu item
const deleteMenuItems = async (req, res) => {
  const menuId = req.params.id;
  try {
    const deletedItem = await Menu.findByIdAndDelete(menuId);
    if (!deletedItem) {
      return res.status(404).json({ message: "menu item is not found" });
    }
    res.status(200).json({ message: "Menu deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// to get single menu item
const singleMenuItem = async (req, res) => {
  const menuId = req.params.id;
  try {
    const menu = await Menu.findById(menuId);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//update single menu item
const updateMenuitem = async (req, res) => {
  const menuId = req.params.id;
  const { name, recipe, image, category, price } = req.body;

  try {
    const updatedMenu = await Menu.findByIdAndUpdate(
      menuId,
      { name, recipe, image, category, price },
      {
        new: true,
        runValidator: true,
      }
    );
    if (!updatedMenu) {
      return res.status(404).json({ message: "menu not found" });
    }
    res.status(200).json(updatedMenu);
    
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
  
};
module.exports = {
  getAllMenuItems,
  postMenuItem,
  deleteMenuItems,
  singleMenuItem,
  updateMenuitem,
};
