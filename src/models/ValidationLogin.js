import mongoose from "mongoose";

const ValidationLoginsSchema = new mongoose.Schema(
  {
    user: {type: String, required: true},
    password: {type: String, required: true} 
  },
  {
    versionKey: false
  }
)

const Validationlogins = mongoose.model("validation", ValidationLoginsSchema)

export default Validationlogins;