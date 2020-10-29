const mongoose = require('mongoose');
const connection = () => {
    mongoose.connect('mongodb://127.0.0.1:27017/shop_inventory');
    mongoose.connection.once('open', function() {
        console.log("connected successfully!")
    }).on('error', function(error) {
        console.log("error is: ", error);
    });
}

module.exports = { connection }