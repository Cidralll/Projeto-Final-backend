import logins from "../models/Login.js";

class LoginController {

  static listLogin = (req, res) => {
    logins.find((err, logins) => {
      if(err) {
        res.status(500).send({message: `${err.message} - Failed to get logins.`})
      } else {
        res.status(200).json(logins)
      }
  })
  }

  static listLoginId = (req, res) => {
    const id = req.params.id;

    logins.findById(id, (err, logins) => {
      if(err) {
        res.status(404).send({message: `${err.message} - Login not found.`})
      } else {
        res.status(200).send(logins);
      }
    })
  }

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

}

export default LoginController