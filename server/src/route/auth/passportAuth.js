import express from 'express'
import passport from 'passport'
const passportRouter = express.Router()

passportRouter.get('/google',
  passport.authenticate('google', { scope: ['profile', ,'email'] }))

passportRouter.get('/google/callback', 
  passport.authenticate('google', { failureRedirect: `${process.env.CLIENT_HOST_URL}/login` }), 
  function(req, res) {
    // Successful authentication, redirect profile.
    res.redirect(process.env.CLIENT_HOST_URL)
  }
)
export default passportRouter
