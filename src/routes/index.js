import express from "express";
import login from './loginRoutes.js';

const routes = (app) => {
  app.route('/').get((req, res) => {
    res.status(200).send({titulo: "API com NodeJS"})
  })

  app.use(
    express.json()
  )

  app.use(
    login
  )

  
}

  

export default routes