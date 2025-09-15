import { Injectable } from '@angular/core';

export interface CartItem {
  id: string;
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
    debugger
    return this.items;
  }
  getItemQuantity(itemId: string): number {
    const item = this.items.find(i => i.id === itemId);
    return item ? item.quantity : 0;
  }

  addToCart(item: CartItem) {
    const existing = this.items.find((i) => i.name === item.name);
    if(item.quantity === 0){
      this.removeFromCart(item.id);
      return;
    }
    if (existing) {
      existing.quantity = item.quantity;
    } else {
      this.items.push({ ...item });
    }
  }

  removeFromCart(itemId: string) {
    this.items = this.items.filter(i => i.id !== itemId);
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
