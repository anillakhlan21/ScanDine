import { Route } from '@angular/router';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { StatusComponent } from './pages/status/status.component';
import { MenuListComponent } from './components/menu-list/menu-list.component';

export const appRoutes: Route[] = [
  { path: '', redirectTo: 'menu', pathMatch: 'full' },
  { path: 'menu', component: MenuListComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'status', component: StatusComponent },
  { path: '**', redirectTo: '' }
];
