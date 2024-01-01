const router=require('express').Router();
const categories=require("./categories");
const products=require("./products");
 router.use("/categories",categories);//when ever want to go categories route this
 router.use("/products",products);
 router.get('/',(req,res) => {
    res.status(200).json({message:"connected!"});
 });
 module.exports = router;