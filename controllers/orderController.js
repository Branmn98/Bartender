const express = require('express');
const Order = require('../models/order');
const router = express.Router();

router.get("/", async (req, res) => {

    const result = await Order.find();
    res.send(result);
});
  
router.post("/", async (req, res) => {
 
    req.body.order_num = new Date().getTime();
    const result = await Order.create(req.body).catch(err => console.log(err));
    res.send(result);
});

router.delete("/:id", async (req, res) => {
    
    const { id } = req.params;
    const result = await Order.findByIdAndRemove(id);
    res.send(result);
});

module.exports = router;