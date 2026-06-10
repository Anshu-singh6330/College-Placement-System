
import {connect} from "mongoose"

const dbConnect = async() => {
    const URI = process.env.MONGO_URI;
    try {
        await connect(URI)
        console.log("MongoDb Connected Successfully ✔️✔️")
    } catch (error) {
        console.log("❌❌ mongodb connection failed: ",error)
    }
}

export default dbConnect;