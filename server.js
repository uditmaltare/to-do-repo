import express from 'express';
import routes from './routes.js';
import cors from 'cors';
import { connectDB } from './mongodb-file/connection.js'
let app = express()
app.use(cors({
    origin: "*"
}))
app.use(express.json())
app.use("/todo", routes)
connectDB().then(() => {
    try {

        app.listen(3000, () => console.log('Server is running on port 3000 run')

        )
    }
    catch (err) {
        console.log('error', err)
    }
})