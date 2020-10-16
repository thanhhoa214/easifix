import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PromotionScreenComponent } from './promotion-screen/promotion-screen.component';
import { ConfirmRequestTimeComponent } from './confirm-request-time/confirm-request-time.component';
import { PromotionDetailScreenComponent } from './promotion-detail-screen/promotion-detail-screen.component';
import { OrderHistoryDetailComponent } from './order-history-detail/order-history-detail.component';
import { ConfirmRequestAddressComponent } from './confirm-request-address/confirm-request-address.component';
import { PendingAfterRequest1Component } from './pending-after-request1/pending-after-request1.component';
import { PendingAfterRequest2Component } from './pending-after-request2/pending-after-request2.component';
import { PendingAfterRequest3Component } from './pending-after-request3/pending-after-request3.component';
import { SigninComponent } from './signin/signin.component';
import { WelcomeComponent } from './welcome/welcome.component';

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
  { path: '', pathMatch: 'full', redirectTo: 'welcome' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
