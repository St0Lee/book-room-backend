const {Schema, model} = require("mongoose");

const orderInfoSchema = Schema({
    name:{
        type: String,
        default: "N/A",
        required: true,
    },
    surname:{
        type: String,
        default: "N/A",
        required: true,
    },
    phone:{
        type: String,
        default: "N/A",
        required: true,
    },
    email:{
        type: String,
        default: "N/A",
    },
    warehouseName:{
        type: String,
        default: "N/A",
    },
    comment:{
        type: String,
        default: "N/A",
    },
    order:{
        type: Array,
        default: [],
        required: true,
    },
}, {versionKey: false, timestamps: true});

const OrderInfo = model("order", orderInfoSchema);

module.exports = OrderInfo;