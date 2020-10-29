const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let Order = new Schema({
    custFName: {
        type: String
    },
    custLName: {
        type: String
    },
    custAddress: {
        type: String,
        required: true
    },
    custContactNumber: {
        type: Number
    },
    Product: {
        type: Number
    },
    quantity: {
        type: String
    }

}, {
    collection: "orders"
});




const Order = mongoose.model("Order", Order);
module.exports = { Order }