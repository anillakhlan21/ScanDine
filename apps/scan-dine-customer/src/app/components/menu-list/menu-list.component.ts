import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter } from '@angular/core';
import { MenuItemComponent } from '../menu-item/menu-item.component';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css'],
  standalone: true,
  imports: [CommonModule, MenuItemComponent],
})
export class MenuListComponent {
  @Output() addToCart = new EventEmitter<any>();

  menu = [
    {
      name: 'Paneer Tikka',
      image: 'assets/paneer-tikka.jpg',
      spicy: 'medium',
      price: 250,
      description: 'Grilled paneer cubes with spices.',
      ingredients: 'Paneer, spices, yogurt',
      veg: true,
      prepTime: 20,
      rating: 4.5,
      reviews: 120,
      quantity: 1,
    },
    {
      name: 'Paneer Tikka',
      image: 'assets/paneer-tikka.jpg',
      spicy: 'medium',
      price: 250,
      description: 'Grilled paneer cubes with spices.',
      ingredients: 'Paneer, spices, yogurt',
      veg: true,
      prepTime: 20,
      rating: 4.5,
      reviews: 120,
      quantity: 1,
    },
    {
      name: 'Paneer Tikka',
      image: 'assets/paneer-tikka.jpg',
      spicy: 'medium',
      price: 250,
      description: 'Grilled paneer cubes with spices.',
      ingredients: 'Paneer, spices, yogurt',
      veg: true,
      prepTime: 20,
      rating: 4.5,
      reviews: 120,
      quantity: 1,
    },
    {
      name: 'Paneer Tikka',
      image: 'assets/paneer-tikka.jpg',
      spicy: 'medium',
      price: 250,
      description: 'Grilled paneer cubes with spices.',
      ingredients: 'Paneer, spices, yogurt',
      veg: true,
      prepTime: 20,
      rating: 4.5,
      reviews: 120,
      quantity: 1,
    },
    {
      name: 'Paneer Tikka',
      image: 'assets/paneer-tikka.jpg',
      spicy: 'medium',
      price: 250,
      description: 'Grilled paneer cubes with spices.',
      ingredients: 'Paneer, spices, yogurt',
      veg: true,
      prepTime: 20,
      rating: 4.5,
      reviews: 120,
      quantity: 1,
    },
  ];

  onAdd(item: any) {
    this.addToCart.emit(item);
  }
}
