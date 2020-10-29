const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 4000
const routes = require("./functions/routes")
const { connection } = require("./functions/database")
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use("/api", routes);
app.listen(PORT, () => {
    console.log(`Server is running on Port:${PORT}`);
    connection();
});