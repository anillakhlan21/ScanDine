import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SharedModule } from '../../shared.module';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css'],
  standalone: true,
  imports: [SharedModule],
})
export class MenuItemComponent {
  @Input() item: any;
  @Output() addToCart = new EventEmitter<any>();
  @Input() quantityInCart: number = 0;
  selectedQuantity: number = this.quantityInCart;

  constructor(private cartService: CartService) {}

  onAdd() {
    this.quantityInCart = this.selectedQuantity;
    this.addToCart.emit({ ...this.item, quantity: this.selectedQuantity });
  }

  increment() {
    this.selectedQuantity++;
  }

  decrement() {
    if (this.quantityInCart > 0) {
      this.selectedQuantity--;
    }
  }

  validateQuantity() {
    if (!this.selectedQuantity || this.selectedQuantity < 1) {
      this.selectedQuantity = 1;
    }
  }

  onImgError(event: Event) {
    console.log(event);
  }

  getStars(): number[] {
    return [1, 2, 3, 4, 5];
  }

  isStarFilled(index: number): boolean {
    return index < Math.round(this.item.rating);
  }

  isAddToCartBtnDisabled(): boolean {
    const quantityInCart = this.cartService.getItemQuantity(this.item.id);
    if (quantityInCart === 0) {
      return this.selectedQuantity <= 0;
    } else {
      return this.selectedQuantity <= -1;
    }
  }
}
