const express=require("express");
const MenuController=require("../Controller/MenuController");

const router=express.Router();

router.route("/").get(MenuController.getAllMenu).post(MenuController.createMenu);

router.route("/:id").get(MenuController.getOneMenu).put(MenuController.updateMenu).delete(MenuController.deleteMenu);

module.exports=router;  