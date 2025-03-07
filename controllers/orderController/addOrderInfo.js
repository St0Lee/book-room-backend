const OrderInfo = require("../../models/orderInfo");

const addOrderInfo = async(req, res) => { 
    const result = await OrderInfo.create({...req.body})
    res.status(201).json({
        result,
        message: "Order has been received"
    })
};

module.exports = addOrderInfo;