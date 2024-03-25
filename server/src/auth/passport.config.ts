import { Strategy as GoogleStrategy } from 'passport-google-oauth20'
import { Strategy as GitHubStrategy } from 'passport-github' 
import passport from 'passport'
import dotenv from 'dotenv'
import { createGoogleUser, getUser, createGithubUser, updateUserPicture } from '../services/user.service'
import { GitHubProfile } from '../types'
import { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, SERVER_HOST_URL } from 'environment'
dotenv.config()

passport.serializeUser((user:any, done)=> done(null, user._id ))
passport.deserializeUser((id, done)=> done(null, id as string))

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID!,
    clientSecret: GOOGLE_CLIENT_SECRET!,
    callbackURL: `${SERVER_HOST_URL}/auth/google/callback/`
  },
  async function(accessToken, refreshToken, profile, done) {
    try{
      const existingUser = await getUser('google',profile.id)
      if(existingUser){
        const {_id, picture} = existingUser
        if(picture !== profile._json.picture)  {
          await updateUserPicture(_id, profile._json.picture!) 
        }
        done(null, existingUser)
        return
      }
      const newUser = await createGoogleUser(profile)
      done(null, newUser) 
    } catch(error:any){
      done(error, undefined)
    }
  }
))

passport.use(new GitHubStrategy({
  clientID: process.env.GITHUB_CLIENT_ID!,
  clientSecret: process.env.GITHUB_CLIENT_SECRET!,
  callbackURL: `${process.env.SERVER_HOST_URL}/auth/github/callback`
},
async function(accessToken, refreshToken, profile, done) { 
  const profile_json = profile._json as GitHubProfile
  try{
    const existingUser = await getUser('github',profile.id)
    if(existingUser){
      const {id, picture} = existingUser
      if(picture !== profile_json.avatar_url)  {
        await updateUserPicture(id, profile_json.avatar_url) 
      }
      done(null, existingUser)
      return
    }
    const newUser = await createGithubUser(profile_json)
    done(null, newUser) 
  } catch(error : any){
    done(error, undefined)
  }
}
))