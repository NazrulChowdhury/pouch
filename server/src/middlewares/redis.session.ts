import connectRedis from 'connect-redis'
import session from 'express-session'
import * as redis from 'redis'
import dotenv from 'dotenv'
dotenv.config()

const RedisStore = connectRedis(session)
//Configure redis client
const redisClient = redis.createClient({
    host: process.env.REDIS_HOST,
    port: parseInt(process.env.REDIS_PORT!)  
})
redisClient.on('error', function (err) {
    console.log('Could not establish a connection with redis. ' + err)
})
redisClient.on('connect', function (err) {
    console.log('Connected to redis successfully')
})
export default session({
    store: new RedisStore({ client: redisClient }),
    secret : process.env.REDIS_SESSION_SECRET!,
    resave: false,
    saveUninitialized : true,
    cookie :{
        httpOnly: true, // prevents client side js from reading the cookie
        secure: process.env.NODE_ENV === 'development' ? false : true, 
        maxAge: 86400*1000*60
    }
})