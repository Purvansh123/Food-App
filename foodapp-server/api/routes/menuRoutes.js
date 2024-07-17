const express = require("express");
const Menu = require("../model/Menu");
const router = express.Router();

const menuController = require("../controllers/menuControllers")

//get alll the menu items
router.get('/', menuController.getAllMenuItems);

//post menu items
router.post('/',menuController.postMenuItem)

// delete a menu item
router.delete('/:id', menuController.deleteMenuItems)

//get single menu item
router.get('/:id', menuController.singleMenuItem)

//update single menu item
router.patch("/:id",menuController.updateMenuitem)

module.exports= router;