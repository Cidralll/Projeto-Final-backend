import logins from "../models/Login.js";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

class LoginController {

  static createLogin = async (req, res) => {
    let Login = new logins(req.body);
    // Valida se senha e email são validos
    if (Login.isValidation()){
      // para cripitografar da senha
      await Login.passwordHash()
      if(Login){
        Login.save((err) => {
          if(err) {
            res.status(500).send({message: `${err.message} - Failed to register Login.`})
          } else {
            res.status(201).send({message: `User registered successfully`})
          }
        })
      }
    }else {
      res.status(400).send({message: `Failed to register Login. Check the information and try again!`})
    }
  }

  static login = async (req, res) => {

    const secret = 'abcdeabcde';
    const id = req.body.user
    const token = jwt.sign({
      id: id._id
    },secret, {expiresIn:'60s'})

    try {
      const {user, password} = req.body;

      const {password:passwordMongo, ...userMongo} = await logins.findOne({user})
      if(userMongo) {
        // para descriptografar senha
        const checkPassword = await bcrypt.compare(password, passwordMongo)
        if (checkPassword) {
          return res.status(202).json(token)  
        } 
        throw new Error('Usuário ou senha inválidos')

      } throw new Error('Usuário ou senha inválidos')
    } catch (error) {
      return res.status(422).json({ error: error.message})
      
    }
  }
}

export default LoginController