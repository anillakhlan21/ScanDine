import express from 'express';
import { QRController } from '../controllers/qr.controller';

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: QR
 *   description: QR Code API
 */

/**
 * @swagger
 * /api/qr/generate/{tableId}:
 *   get:
 *     summary: Generate a QR code for a table no.
 *     tags: [QR]
 *     parameters:
 *      - name: tableId
 *        in: path
 *        description: Id of table for which qr will be generated.
 *        required: true
 *        
 *     responses:
 *       200:
 *         description: successful operation
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 qrCodeUrl:
 *                   type: string
 *                   example: "data:image/png;base64,iVBORw0KGgoAAA"
 */
router.get('/generate/:tableId', QRController.generateQRCode);

export default router;