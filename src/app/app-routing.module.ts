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
import { LayoutComponent } from './layout/layout.component';
import { NotiComponent } from './noti/noti.component';
import { PromotionDetailComponent } from './promotion-detail/promotion-detail.component';
import { HistoryProcessingComponent } from './history-processing/history-processing.component';
import { HistoryCompletedComponent } from './history-completed/history-completed.component';
import { SearchComponent } from './search/search.component';
import { SuccessMomoComponent } from './success-momo/success-momo.component';
import { SuccessComponent } from './success/success.component';
import { FixerProfileComponent } from './fixer-profile/fixer-profile.component';
import { FixerFeedbackComponent } from './fixer-feedback/fixer-feedback.component';
import { HomeSearchModalComponent } from './shared/components/home-search-modal/home-search-modal.component';

const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'search-popup', component: HomeSearchModalComponent },
  { path: 'fixer-profile', component: FixerProfileComponent },
  { path: 'fixer-feedback', component: FixerFeedbackComponent },
  { path: 'momo', component: SuccessMomoComponent },
  { path: 'success', component: SuccessComponent },
  {
    path: 'fixer',
    loadChildren: () =>
      import('./fixer/fixer.module').then((m) => m.FixerModule),
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'fixer',
        loadChildren: () =>
          import('./fixer/fixer-routing.module').then(
            (module) => module.FixerRoutingModule
          ),
      },

      {
        path: 'home',
        children: [
          { path: 'booking', component: BookingComponent },
          { path: 'checkout', component: CheckoutComponent },
          { path: '', component: HomeComponent, pathMatch: 'full' },
        ],
      },
      {
        path: 'search',
        children: [{ path: '**', component: SearchComponent }],
      },
      { path: 'profile', component: ProfileComponent },
      { path: 'setting', component: SettingComponent },
      {
        path: 'notification',
        component: NotiComponent,
        children: [
          {
            path: 'promotions',
            children: [
              { path: 'list', component: PromotionComponent },
              { path: 'promotion-detail', component: PromotionDetailComponent },
              { path: '', redirectTo: 'list', pathMatch: 'full' },
            ],
          },
          { path: 'notifications', component: NotificationComponent },
          { path: '', redirectTo: 'notifications', pathMatch: 'full' },
        ],
      },
      {
        path: 'history',
        component: HistoryComponent,
        children: [
          { path: 'processing', component: HistoryProcessingComponent },
          { path: 'completed', component: HistoryCompletedComponent },
          { path: '', redirectTo: 'processing', pathMatch: 'full' },
        ],
      },
      { path: 'favorite', component: FavoriteComponent },
      { path: '', pathMatch: 'full', redirectTo: 'home' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
