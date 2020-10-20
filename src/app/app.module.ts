import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SigninComponent } from './signin/signin.component';
import { PromotionScreenComponent } from './promotion-screen/promotion-screen.component';
import { ConfirmRequestTimeComponent } from './confirm-request-time/confirm-request-time.component';
import { PromotionDetailScreenComponent } from './promotion-detail-screen/promotion-detail-screen.component';
import { OrderHistoryDetailComponent } from './order-history-detail/order-history-detail.component';
import { ConfirmRequestAddressComponent } from './confirm-request-address/confirm-request-address.component';
import { PendingAfterRequest1Component } from './pending-after-request1/pending-after-request1.component';
import { PendingAfterRequest2Component } from './pending-after-request2/pending-after-request2.component';
import { PendingAfterRequest3Component } from './pending-after-request3/pending-after-request3.component';
import { PendingAfterRequest4Component } from './pending-after-request4/pending-after-request4.component';
import { HomeSearchComponent } from './home-search/home-search.component';
import { BookProcessComponent } from './book-process/book-process.component';
import { BookSuccessComponent } from './book-success/book-success.component';
import { BookFailedComponent } from './book-failed/book-failed.component';
import { PolicyScreenComponent } from './policy-screen/policy-screen.component';
import { SuccessComponent } from './success/success.component';
import { HomeSearchModalComponent } from './shared/components/home-search-modal/home-search-modal.component';
import { ListAddressComponent } from './list-address/list-address.component';
import { CreateAddressComponent } from './create-address/create-address.component';
import { HistoryOngoingComponent } from './history-ongoing/history-ongoing.component';
import { HistoryCancelComponent } from './history-cancel/history-cancel.component';
import { HistoryCompleteComponent } from './history-complete/history-complete.component';
import { NotificationScreenComponent } from './notification-screen/notification-screen.component';
import { ListStoreComponent } from './list-store/list-store.component';
import { StroreDetailsComponent } from './strore-details/strore-details.component';

import { StoreMapDetailsComponent } from './store-map-details/store-map-details.component';
import { SettingComponent } from './setting/setting.component';
import { SignupComponent } from './signup/signup.component';
import { SignupOtpComponent } from './signup-otp/signup-otp.component';
import { StoreCallDetailsComponent } from './store-call-details/store-call-details.component';
import { HomeListStoreComponent } from './home-list-store/home-list-store.component';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    SigninComponent,
    PromotionScreenComponent,
    ConfirmRequestTimeComponent,
    PromotionDetailScreenComponent,
    OrderHistoryDetailComponent,
    ConfirmRequestAddressComponent,
    PendingAfterRequest1Component,
    PendingAfterRequest2Component,
    PendingAfterRequest3Component,
    PendingAfterRequest4Component,
    HomeSearchComponent,
    // StoreCallDetailsComponent,
    BookProcessComponent,
    BookSuccessComponent,
    BookFailedComponent,
    PolicyScreenComponent,
    SuccessComponent,
    HomeSearchModalComponent,
    ListAddressComponent,
    CreateAddressComponent,
    HistoryOngoingComponent,
    HistoryCancelComponent,
    HistoryCompleteComponent,
    NotificationScreenComponent,
    ListStoreComponent,
    StroreDetailsComponent,
    StoreMapDetailsComponent,
    SettingComponent,
    SignupComponent,
    SignupOtpComponent,
    StoreCallDetailsComponent,
    HomeListStoreComponent,
    LoginComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, SharedModule, BrowserAnimationsModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
