import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';

@Component({
  imports: [RouterModule, HeaderComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'scan-dine-customer';
  orderStatus: any; // You can specify the correct type instead of 'any'
  orderId: any; // Add this if 'orderId' is also missing

  constructor() {
    // Initialize orderStatus and orderId as needed
    this.orderStatus = null;
    this.orderId = null;
  }
}
