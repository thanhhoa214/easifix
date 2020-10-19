import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateAddressComponent } from './create-address/create-address.component';
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
import { BookFailedComponent } from './book-failed/book-failed.component';
import { BookProcessComponent } from './book-process/book-process.component';
import { BookSuccessComponent } from './book-success/book-success.component';
import { PolicyScreenComponent } from './policy-screen/policy-screen.component';
import { ListAddressComponent } from './list-address/list-address.component';
import { HistoryOngoingComponent } from './history-ongoing/history-ongoing.component';
import { HistoryCancelComponent } from './history-cancel/history-cancel.component';
import { HistoryCompleteComponent } from './history-complete/history-complete.component';
import { NotificationScreenComponent } from './notification-screen/notification-screen.component';
import { SigninComponent } from './signin/signin.component';
import { StoreCallDetailsComponent } from './store-call-details/store-call-details.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SuccessComponent } from './success/success.component';

const routes: Routes = [
  {
    path: 'welcome',
    component: WelcomeComponent,
  },
  {
    path: 'signin',
    component: SigninComponent,
  },
  {
    path: 'promotion-screen',
    component: PromotionScreenComponent,
  },
  {
    path: 'confirm-request-time',
    component: ConfirmRequestTimeComponent,
  },
  {
    path: 'promotion-detail-screen',
    component: PromotionDetailScreenComponent,
  },
  {
    path: 'order-history-detail',
    component: OrderHistoryDetailComponent,
  },
  {
    path: 'confirm-request-address',
    component: ConfirmRequestAddressComponent,
  },
  { path: 'pending-after-request1', component: PendingAfterRequest1Component },
  { path: 'pending-after-request2', component: PendingAfterRequest2Component },
  { path: 'pending-after-request3', component: PendingAfterRequest3Component },
  { path: 'pending-after-request4', component: PendingAfterRequest4Component },
  { path: 'home-search', component: HomeSearchComponent },
  { path: 'store-call-details', component: StoreCallDetailsComponent },
  {
    path: 'book-process',
    component: BookProcessComponent,
  },
  {
    path: 'book-success',
    component: BookSuccessComponent,
  },
  {
    path: 'book-failed',
    component: BookFailedComponent,
  },
  {
    path: 'policy-screen',
    component: PolicyScreenComponent,
  },
  {
    path: 'success',
    component: SuccessComponent,
  },
  { path: 'list-address', component: ListAddressComponent },
  { path: 'create-address', component: CreateAddressComponent },
  { path: 'history-ongoing', component: HistoryOngoingComponent },
  { path: 'history-cancel', component: HistoryCancelComponent },
  {
    path: 'history-complete',
    component: HistoryCompleteComponent,
  },
  { path: 'notification-screen', component: NotificationScreenComponent },
  { path: '', pathMatch: 'full', redirectTo: 'welcome' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
