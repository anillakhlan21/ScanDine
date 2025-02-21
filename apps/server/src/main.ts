import express from 'express';
import mongoose from 'mongoose';

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

const app = express();

mongoose.connect(`mongodb://127.0.0.1:27017/ScanDine`).then(()=>{
  console.log("Connected to Mongodb")
});

app.get('/', (req, res) => {
  res.send({ message: 'Hello API' });
});

app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});
