import mongoose from "mongoose"

const connectDatabase = () => {
    mongoose.connect(process.env.DB_LOCAL_URL as string).then((con)=>{
        console.log(`MongoDb DATABASE connected with HOST: ${con.connection.host}`)
    })
}

export default connectDatabase;