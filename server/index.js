import  Express  from "express"
import middleware from "./src/middleware/index.js"
import dotenv  from "dotenv"
dotenv.config()

const app = Express()
const port = process.env.PORT || 8080

app.use(middleware)

app.get('/', (req, res) => res.send('working!'))
app.listen(port,() => console.log(`listening on port ${port}`)) 


