import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderStatusComponent } from '../../components/order-status/order-status.component';

@Component({
  selector: 'app-status',
  standalone: true,
  imports: [CommonModule, OrderStatusComponent],
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css'],
})
export class StatusComponent {
  // In a real app, these would come from a service or route params
  orderId: string = 'ORD123456';
  status: string = 'Preparing'; // Example: Pending, Preparing, Ready, Served
}
