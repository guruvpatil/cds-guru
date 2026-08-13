const mongoose = require("mongoose");
const { MongoMemoryServer } = require("mongodb-memory-server");

let memoryServer;

const connectDB = async () => {
    try {
        const mongoUri = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/blog-app";
        await mongoose.connect(mongoUri);
        console.log("MongoDB connected successfully");
    } catch (error) {
        try {
            memoryServer = await MongoMemoryServer.create();
            const mongoUri = memoryServer.getUri();
            await mongoose.connect(mongoUri);
            console.log("MongoDB connected using in-memory server");
        } catch (memoryError) {
            console.error("MongoDB connection failed:", error.message);
            console.error("Memory Mongo fallback failed:", memoryError.message);
            process.exit(1);
        }
    }
};

module.exports = connectDB;