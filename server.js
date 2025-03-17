import express from 'express';
import routes from './routes.js';
import cors from 'cors';
import { connectDB } from './mongodb-file/connection.js'
let app = express()
app.use(cors())
app.use(express.json())
app.use("/students", routes)
connectDB().then(() => {
    try {

        app.listen(3000, () => console.log('Server is running on port 3000')

        )
    }
    catch (err) {
        console.log('error', err)
    }
})