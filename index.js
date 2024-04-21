const express = require("express");
const mongoose = require("mongoose");
const productRoute = require("./routes/product.route");
const Product = require("./models/product.model");
const app = express();


//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/api/products", productRoute);


app.get('/', (req, res) => {
    res.send("Hello from API server updated")
});

//connecting to a Database
mongoose
    .connect(
        "mongodb://localhost:27017/store"
    )
    .then(()=>{
        console.log("Connected to database!!!!");
        app.listen(3000, () => {
            console.log("Server is running on port 3000");
        });
    })
    .catch((error) => {
        console.log("Connection failed!", error)
    })