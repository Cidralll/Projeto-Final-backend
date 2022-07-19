import logins from "../models/Login.js";
import jwt from 'jsonwebtoken';

class LoginController {

  static createLogin = (req, res) => {
    let Login = new logins(req.body);
    if (Login){
      if(Login){
        Login.save((err) => {
          if(err) {
            res.status(500).send({message: `${err.message} - Failed to register Login.`})
          } else {
            res.status(201).send(Login.toJSON())
          }
        })
      }else{
        res.status(400).send({message: `Failed to register Login. Check the information and try again!`})
      }
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
        if (password === passwordMongo) {
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