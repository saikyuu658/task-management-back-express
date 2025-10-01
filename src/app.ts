import express from 'express';
import taskRouter from './routes/task.route.js';

const app = express();
const PORT = process.env.PORT || 3000;



app.get('/', (req, res)=>{
  res.send({message: "Serve running"})
})

app.use('/task', taskRouter)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});