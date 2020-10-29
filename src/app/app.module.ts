import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import '@angular/common/locales/global/vi';
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
import { PromotionDetailComponent } from './promotion-detail/promotion-detail.component';
import { HistoryCompletedComponent } from './history-completed/history-completed.component';
import { HistoryProcessingComponent } from './history-processing/history-processing.component';
import { SearchComponent } from './search/search.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SuccessMomoComponent } from './success-momo/success-momo.component';

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
    PromotionDetailComponent,
    HistoryCompletedComponent,
    HistoryProcessingComponent,
    SearchComponent,
    SuccessMomoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    IonicModule.forRoot({
      mode: 'ios',
    }),
    ReactiveFormsModule,
  ],
  bootstrap: [AppComponent],
  providers: [{ provide: LOCALE_ID, useValue: 'vi' }],
})
export class AppModule {}
