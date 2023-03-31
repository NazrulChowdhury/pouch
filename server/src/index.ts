import app from '@app'
import { PORT } from './environment'
import { connectMongo } from './util/mongo'


const port = PORT || 8080
app.listen(port, async() => {
    console.log(`listening on port ${port}`)
    await connectMongo()
}) 

