import mongoose from "mongoose";
import ValidationUser from '../validation/validationUser.js';
import ValidationPassword from "../validation/validationPassword.js";

const LoginsSchema = new mongoose.Schema(
  {
    id: {type: String},
    user: {type: String, required: true},
    password: {type: String, required: true} 
  },
  {
    versionKey: false
  }
)

LoginsSchema.methods.isValidation = function() {
  let user = ValidationUser(this.user);
  let password = ValidationPassword(this.password);
  if (user === true && password === true) {
    return true;
  }else if (user === false || password === false){
    return false;
  }
}

const logins = mongoose.model("logins", LoginsSchema)

export default logins;