import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

interface CartItem {
  name: string;
  price: number;
  quantity: number;
}

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent {
  @Input() items: CartItem[] = [
    { name: 'Paneer Tikka', price: 250, quantity: 1 },
    { name: 'Butter Naan', price: 40, quantity: 2 },
  ];

  get total(): number {
    return this.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }

  orderPlaced = false;

  placeOrder() {
    this.orderPlaced = true;
    // Here you would call your backend API to place the order
  }
}
