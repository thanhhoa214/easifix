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
import { StoreCallDetailsComponent } from './store-call-details/store-call-details.component';
import { BookProcessComponent } from './book-process/book-process.component';
import { BookSuccessComponent } from './book-success/book-success.component';
import { BookFailedComponent } from './book-failed/book-failed.component';
import { PolicyScreenComponent } from './policy-screen/policy-screen.component';
import { SuccessComponent } from './success/success.component';
import { BottomBarComponent } from './shared/components/bottom-bar/bottom-bar.component';
import { HomeSearchModalComponent } from './shared/components/home-search-modal/home-search-modal.component';
import { ListAddressComponent } from './list-address/list-address.component';
import { CreateAddressComponent } from './create-address/create-address.component';

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
    StoreCallDetailsComponent,
    BookProcessComponent,
    BookSuccessComponent,
    BookFailedComponent,
    PolicyScreenComponent,
    SuccessComponent,
    BottomBarComponent,
    HomeSearchModalComponent,
    ListAddressComponent,
    CreateAddressComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
