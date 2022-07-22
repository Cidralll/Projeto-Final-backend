import mongoose from "mongoose";
import ValidationUser from '../validation/validationUser.js';
import ValidationPassword from "../validation/validationPassword.js";
import bcrypt from 'bcrypt';

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

LoginsSchema.methods.passwordHash = async function() {
  let password = this.password;

  const salt = await bcrypt.genSalt(12);
  const passwordHash = await bcrypt.hash(password, salt);
  return this.password = passwordHash;
}

const logins = mongoose.model("logins", LoginsSchema)

export default logins;