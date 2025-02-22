import express from 'express';
import mongoose from 'mongoose';
import qrRoutes from './routes/qr.routes';
import roleRoutes from './routes/role.routes';
import { setupSwagger } from './config/swagger';
import bodyParser from 'body-parser';
const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 5000;

const app = express();
app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: true }));

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

setupSwagger(app);

mongoose.connect(`mongodb://127.0.0.1:27017/ScanDine`).then(() => {
  console.log('Connected to Mongodb');
});
app.use('/api/qr', qrRoutes);
app.use('/api/role', roleRoutes);

app.listen(port, host, () => {
  console.log(`Server running at http://localhost:${port}`);
  console.log(`Swagger docs available at http://localhost:${port}/api-docs`);
});
