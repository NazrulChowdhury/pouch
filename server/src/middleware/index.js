import express from 'express'
import cors from "cors"
import morgan from "morgan";
import session from './redis.session.js'

const middleware = express.Router()

middleware.use(cors({
    Origin: "*", 
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials:  false //true // allow session cookie from browser to pass through
}))
middleware.use(express.json())
middleware.use(morgan('common'))
middleware.use(express.urlencoded({extended:false}))
middleware.use(session)

export default middleware
