import { Injectable } from '@angular/core';

export interface CartItem {
  name: string;
  price: number;
  quantity: number;
}

@Injectable({ providedIn: 'root' })
export class CartService {
  private items: CartItem[] = [];
  private orderStatus: string = 'Pending';
  private orderId: string | null = null;

  getCart(): CartItem[] {
    return this.items;
  }

  addToCart(item: CartItem) {
    const existing = this.items.find(i => i.name === item.name);
    if (existing) {
      existing.quantity += item.quantity;
    } else {
      this.items.push({ ...item });
    }
  }

  clearCart() {
    this.items = [];
  }

  setOrderStatus(status: string, orderId?: string) {
    this.orderStatus = status;
    if (orderId) this.orderId = orderId;
  }

  getOrderStatus() {
    return { status: this.orderStatus, orderId: this.orderId };
  }
}
