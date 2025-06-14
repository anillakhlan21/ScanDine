import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SharedModule } from '../../shared.module';

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

  onAdd() {
    this.addToCart.emit({ ...this.item, quantity: this.item.quantity || 1 });
  }

  increment() {
    this.item.quantity = (this.item.quantity || 1) + 1;
  }

  decrement() {
    if (this.item.quantity > 1) {
      this.item.quantity--;
    }
  }

  validateQuantity() {
    if (!this.item.quantity || this.item.quantity < 1) {
      this.item.quantity = 1;
    }
  }

  onImgError(event: Event) {
    (event.target as HTMLImageElement).src = 'assets/placeholder.jpg';
  }

  getStars(): number[] {
    return [1, 2, 3, 4, 5];
  }

  isStarFilled(index: number): boolean {
    return index < Math.round(this.item.rating);
  }
}
