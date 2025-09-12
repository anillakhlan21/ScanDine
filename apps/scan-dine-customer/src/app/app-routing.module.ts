import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StatusComponent } from './pages/status/status.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { MenuListComponent } from './components/menu-list/menu-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'menu', pathMatch: 'full' },
  { path: 'menu', component: MenuListComponent },         // Entry point with ?table=...
  { path: 'checkout', component: CheckoutComponent },
  { path: 'status', component: StatusComponent },
  { path: '**', redirectTo: 'menu' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}