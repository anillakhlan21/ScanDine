import express from 'express';
import { QRController } from '../controllers/qr.controller';

const router = express.Router();

router.get('/generate/:tableId', QRController.generateQRCode);

export default router;
