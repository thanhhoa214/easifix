import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SettingComponent } from './setting/setting.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { BookingComponent } from './booking/booking.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { HistoryComponent } from './history/history.component';
import { NotificationComponent } from './notification/notification.component';
import { ProfileComponent } from './profile/profile.component';
import { PromotionComponent } from './promotion/promotion.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: 'booking', component: BookingComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'favorite', component: FavoriteComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'notification', component: NotificationComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'setting', component: SettingComponent },
  { path: 'promotion', component: PromotionComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: '', pathMatch: 'full', redirectTo: 'welcome' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
