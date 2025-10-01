import express from 'express';
import taskRouter from './routes/task.route.js';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';

const app = express();
const PORT = process.env.PORT || 3000;
dotenv.config()

app.use(bodyParser.json())

app.get('/', (req, res)=>{
  res.send({message: "Serve running"})
})



app.use('/task', taskRouter)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


