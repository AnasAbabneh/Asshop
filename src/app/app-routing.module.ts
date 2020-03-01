import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { CartComponent } from './components/cart/cart.component';
import { GoodsComponent } from './components/goods/goods.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AuthGuard } from './services/guards/auth.guard';
import { NotAuthGuard } from './services/guards/not-auth.guard';
import { AdminGuard } from './services/guards/admin.guard';


const routes: Routes = [
  { path: '', component: WelcomeComponent, data: {index: 0} },
  { path: 'welcome', component: HomeComponent, data: {index: 1} },
  { path: 'login', component: LoginComponent, canActivate: [NotAuthGuard], data: {index: 2} },
  { path: 'signup', component: SignupComponent, canActivate: [NotAuthGuard], data: {index: 3} },
  { path: 'cart', component: CartComponent, canActivate: [AuthGuard], data: {index: 4} },
  { path: 'admin', component: GoodsComponent, canActivate: [AdminGuard], data: {index: 5} },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
