import express from "express";
import login from './loginRoutes.js';
import validation from './validation.js';

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

  app.use (
    validation
  )
}

  

export default routes