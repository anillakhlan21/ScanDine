import QRCode from 'qrcode';
import { TableModel } from '../models/table.model';

export class QRService {
  static async generateQRCode(tableId: string) {
    try {
      const orderUrl = `https://abc.com/order?table=${tableId}`;
      const qrCodeUrl = await QRCode.toDataURL(orderUrl);
      const table = await TableModel.findOneAndUpdate(
        { tableId },
        { qrCodeUrl },
        { upsert: true, new: true }
      );

      return qrCodeUrl;
    } catch (error) {
      throw new Error('Error generating QR Code');
    }
  }
}
