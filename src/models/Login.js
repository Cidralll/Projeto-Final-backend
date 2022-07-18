import mongoose from "mongoose";

const LoginsSchema = new mongoose.Schema(
  {
    id: {type: String},
    user: {type: String, required: true},
    password: {type: String, required: true, select: false} 
  },
  {
    versionKey: false
  }
)

const logins = mongoose.model("logins", LoginsSchema)

export default logins;