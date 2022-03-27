import express from 'express'
import passport from 'passport'
const passportRouter = express.Router()

passportRouter.get('/google',
  passport.authenticate('google', { scope: ['profile'] }))

passportRouter.get('/google/callback', 
passport.authenticate('google', { failureRedirect: '/login' }), 
function(req, res) {
  // Successful authentication, redirect profile.
  res.redirect('/profile');
})

export default passportRouter