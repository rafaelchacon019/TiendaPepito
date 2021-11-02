import product from "../models/product.js";

const registerProduct = async(req, res) => {
    if (!req.body.name || !req.body.precio || !req.body.stock) {
        return res.status(400).send("Incomplete data");
    }

    const existingProduct = await product.findOne({ name: req.body.name });
    if (existingProduct) {
        return res.status(400).send("Product already exists");
    }

    const productSchema = new product({
        name: req.body.name,
        precio: req.body.precio,
        stock: req.body.stock,
    });

    const result = await productSchema.save();
    if (!result) return res.status(500).send("Failed to register role");

    return res.status(200).send({ result });
};

export default { registerProduct };