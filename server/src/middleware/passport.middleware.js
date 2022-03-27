import express from 'express'
import passport from 'passport'

const passportMiddleware =  express.Router()

passportMiddleware.use(passport.initialize())
passportMiddleware.use(passport.session())

export default passportMiddleware

