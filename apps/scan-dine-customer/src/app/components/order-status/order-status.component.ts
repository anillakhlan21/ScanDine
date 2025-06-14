import { CommonModule } from '@angular/common';
import { Component, Input, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-order-status',
  templateUrl: './order-status.component.html',
  styleUrls: ['./order-status.component.css'],
  imports: [
    CommonModule
  ]
})
export class OrderStatusComponent {
  @Input() status: string = 'Pending'; // Example statuses: Pending, Preparing, Ready, Served
  @Input() orderId?: string;
}
