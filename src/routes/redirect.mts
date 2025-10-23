import express from 'express';

const redirectRoutes = express.Router();

redirectRoutes.use((req, res, next) => {

  const allowedPaths = {
    "path": [
        '/',
    '/h',
    '/start',
    '/homepage',
    '/hp',
    '/home'
    ],
    "out": "/home"
  }
  
  
  if (allowedPaths.path.includes(req.url)) {
    req.url = allowedPaths.out
  }

  next()

})

export default redirectRoutes