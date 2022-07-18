import mongoose from "mongoose"

mongoose.connect("mongodb+srv://LucasCidral:123@apilogin.yaqwh9c.mongodb.net/login?");

let db = mongoose.connection;

export default db;