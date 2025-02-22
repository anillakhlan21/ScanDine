import { NextFunction, Request, Response } from 'express';
import { QRService } from '../services/qr.service';

export class QRController {
  static async generateQRCode(req: Request, res: Response, next: NextFunction) {
    try {
      const { tableId } = req.params;
      if (!tableId) {
        return res.status(400).json({ message: 'Table ID is required' });
      }

      const qrCodeUrl = await QRService.generateQRCode(tableId);
      return res.status(200).json({ qrCodeUrl });
    } catch (error) {
      next(error);
    }
  }
}
