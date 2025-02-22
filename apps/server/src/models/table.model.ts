import mongoose from 'mongoose';

const TableSchema = new mongoose.Schema({
  tableId: { type: String, required: true, unique: true },
  qrCodeUrl: { type: String, required: true, unique: true },
}, { timestamps: true });

export const TableModel = mongoose.model('Table', TableSchema);
