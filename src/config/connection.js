import mongoose from "mongoose";

mongoose.connect("mongodb+srv://root:123@alura.mj4kpmi.mongodb.net/alura-node");

let db = mongoose.connection;

export default db;