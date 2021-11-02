import mongoose from "mongoose";

const dbConnection = async() => {
    try {
        await mongoose.connect(process.env.DB_CONNECTION, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connection whit Mongo to TiendaPepito: successful");
    } catch (e) {
        console.log("Error coneccting to MongoDB: \n" + e);
    }
};

export default { dbConnection };