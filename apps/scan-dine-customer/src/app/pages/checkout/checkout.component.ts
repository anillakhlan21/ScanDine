import { Component } from '@angular/core';
import { CartService, CartItem } from '../../services/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
  standalone: true,
  imports: [],
})
export class CheckoutComponent {
  items: CartItem[] = [];

  constructor(private cartService: CartService) {
    this.items = this.cartService.getCart();
  }

  get total(): number {
    return this.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }

  placeOrder() {
    // ...place order logic...
    this.cartService.clearCart();
  }
}
