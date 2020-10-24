import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { BookingComponent } from './booking/booking.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { HistoryComponent } from './history/history.component';
import { PromotionComponent } from './promotion/promotion.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { NotificationComponent } from './notification/notification.component';
import { SettingComponent } from './setting/setting.component';
import { ProfileComponent } from './profile/profile.component';
import { IonicModule } from '@ionic/angular';
import { LayoutComponent } from './layout/layout.component';
import { NotiComponent } from './noti/noti.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    HomeComponent,
    BookingComponent,
    CheckoutComponent,
    HistoryComponent,
    PromotionComponent,
    FavoriteComponent,
    NotificationComponent,
    SettingComponent,
    ProfileComponent,
    LayoutComponent,
    NotiComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    IonicModule.forRoot({
      mode: 'ios',
    }),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
