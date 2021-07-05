import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { ProductListComponent } from './productlist/productlist.component';
import { RegisterComponent } from './register/register.component';
import { WishlistComponent } from './wishlist/wishlist.component';
const routes: Routes = [
  
  { path:'register', component: RegisterComponent },
  { path:'productlist', component: ProductListComponent },
  { path:'wishlist', component: WishlistComponent },
  { path:'cart', component: CartComponent},
  {path:'login', component: LoginComponent},
  { path:'product', component: ProductdetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponenets = [WishlistComponent, ProductListComponent, RegisterComponent,LoginComponent, CartComponent, ProductdetailsComponent]