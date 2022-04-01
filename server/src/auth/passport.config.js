import { Strategy as GoogleStrategy } from 'passport-google-oauth20'
import passport from 'passport'
import dotenv from 'dotenv'
import { createUser, getUser } from '../service/user.js'
dotenv.config()

passport.serializeUser((user, done)=> done(null, user.id))
passport.deserializeUser((id, done)=> done(null, id))

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: `${process.env.SERVER_HOST_URL}/auth/google/callback`
  },
  async function(accessToken, refreshToken, profile, done) {
    try{
      const existingUser = await getUser('google',profile.id)
      if(existingUser){
        const {id, picture} = existingUser
        if(picture !== profile._json.picture)  {
          await updateUserPicture(id, profile._json.picture) 
        }
        done(null, existingUser)
        return
      }
      const newUser = await createUser(profile._json)
      done(null, newUser) 
    } catch(error){
      done(err, null)
    }
  }
))
