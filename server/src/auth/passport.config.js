import { Strategy as GoogleStrategy } from 'passport-google-oauth20'
import passport from 'passport'
import dotenv from 'dotenv'
dotenv.config()

passport.serializeUser((user, done)=> done(null, user.id))
passport.deserializeUser((id, done)=> done(null, id))

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: `${process.env.HOST_URL}/auth/google/callback`
  },
  function(accessToken, refreshToken, profile, done) {
    const user = {id : profile.id, displayName : profile.displayName}
    return done(null, user)
  }
))
