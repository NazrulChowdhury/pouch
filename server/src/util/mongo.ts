import mongoose,{ ConnectOptions } from "mongoose"
import { MONGO_TEST_URI, MONGO_URI } from "../environment"

export const connectMongo = async(test = false) => {

    const mongoUrl = test ? MONGO_TEST_URI : MONGO_URI
    try{
        await mongoose.connect(mongoUrl!,
            {
                useNewUrlParser:true, 
                useUnifiedTopology:true
            } as ConnectOptions
        )
        console.log('db is connected')
    }catch(error : any){
        console.log(error)
        process.exit(1)
    }
}
export const disconnectMongo = async() => {
    try{
        await mongoose.connection.close()
        await mongoose.disconnect()
    } catch(error){
        console.log('failed to close db connection!')
    }
}
export const clearCollections = async() => {
    try{
        const collections = await mongoose.connection.db.collections();
        for (const collection of collections) {
          await collection.deleteMany({});
        }
    }catch(error){
        console.log('failed to clear all collections')
    }
}