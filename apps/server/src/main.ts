import express from 'express';
import mongoose from 'mongoose';
import qrRoutes from './routes/qr.routes';
import { setupSwagger } from './config/swagger';
import errorHandler from './middlewares/errorHandler';
const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 5000;

const app = express();

setupSwagger(app);

mongoose.connect(`mongodb://127.0.0.1:27017/ScanDine`).then(() => {
  console.log('Connected to Mongodb');
});
app.use('/api/qr', qrRoutes);

app.use(errorHandler);

app.listen(port, host, () => {
  console.log(`Server running at http://localhost:${port}`);
  console.log(`Swagger docs available at http://localhost:${port}/api-docs`);
});

