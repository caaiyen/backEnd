const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let Product = new Schema({
    prodName: {
        type: String
    },
    prodBrand: {
        type: String
    },
    prodImage: {
        type: String,
        required: true
    },
    prodStock: {
        type: Number
    },
    prodPerPiece: {
        type: Number
    },
    prodDescription: {
        type: String
    }

}, {
    collection: "products"
});

let Sale = new Schema({
    prodID: {
        type: Schema.Types.ObjectId,
        ref: 'Product'
    },
    quantity: {
        type: Number
    },
    totalSales: {
        type: Number
    }
}, {
    collection: "sales"
})


const Products = mongoose.model("Product", Product);
const Sales = mongoose.model("Sale", Sale);
module.exports = { Products, Sales }