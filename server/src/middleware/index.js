import express from 'express'
import cors from "cors"
import morgan from "morgan";
import session from './redis.session.js'
import passportMiddleware from './passport.middleware.js';

const middleware = express.Router()

middleware.use(cors({ 
    origin: "http://localhost:3000",//process.env.CLIENT_HOST_URL, 
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true // allow session cookie from browser to pass through
}))
middleware.use(express.json())
middleware.use(morgan('common'))
middleware.use(express.urlencoded({extended:false}))
middleware.use(session)
middleware.use(passportMiddleware)

export default middleware
