import mongoose from 'mongoose';

const Connection = async(username="patilakshay4524",password="Akshay1234")=>{
    const URL =`mongodb://patilakshay4524:${password}@ac-sqy9dwm-shard-00-00.m6czqxx.mongodb.net:27017,ac-sqy9dwm-shard-00-01.m6czqxx.mongodb.net:27017,ac-sqy9dwm-shard-00-02.m6czqxx.mongodb.net:27017/GOOGLEDOC?ssl=true&replicaSet=atlas-sb7jsg-shard-0&authSource=admin&retryWrites=true&w=majority`
    try {
        await mongoose.connect(URL,{useUnifiedTopology:true,useNewUrlParser:true})
        console.log("connected successfully")
    } catch (error) {
        console.log("error while connecting database",error)
    }

    
}
export default Connection;