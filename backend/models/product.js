import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: String,
    precio: Number,
    stock: Number,
    registerDate: { type: Date, default: Date.now },
});

const product = mongoose.model("products", productSchema);

export default product;