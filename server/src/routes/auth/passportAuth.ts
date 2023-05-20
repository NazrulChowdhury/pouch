import express from 'express'
import passport from 'passport'
const passportRouter = express.Router()

//google
passportRouter.get('/google',
  //@ts-ignore
  passport.authenticate('google', { scope: ['profile', ,'email'] }))

passportRouter.get('/google/callback', 
  passport.authenticate('google', { failureRedirect: `${process.env.CLIENT_HOST_URL}/login` }), 
  function(req, res) {
    res.redirect(process.env.CLIENT_HOST_URL as string)
  }
)
// github
passportRouter.get('/github',
  passport.authenticate('github'))

  passportRouter.get('/github/callback', 
  passport.authenticate('github', { failureRedirect: `${process.env.CLIENT_HOST_URL}/login` }),
  function(req, res) {
    res.redirect(process.env.CLIENT_HOST_URL as string)
  })

export default passportRouter
