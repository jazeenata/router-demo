const categories = require('express').Router;
const allCategories = require("./allCategories");
 categories.get("/",allCategories);
 module.export = categories;