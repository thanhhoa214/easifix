import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SuccessComponent } from './success/success.component';
import { HomeComponent } from './home/home.component';
import { RequestDetailComponent } from './request-detail/request-detail.component';
import { RequestMoreComponent } from './request-more/request-more.component';
import { ProfileComponent } from './profile/profile.component';
import { FixerComponent } from './fixer.component';
import { NotiComponent } from '../noti/noti.component';
import { PromotionComponent } from '../promotion/promotion.component';
import { PromotionDetailComponent } from '../promotion-detail/promotion-detail.component';
import { NotificationComponent } from '../notification/notification.component';
import { SettingComponent } from '../setting/setting.component';

const routes: Routes = [
  {
    path: '',
    component: FixerComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'success', component: SuccessComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'request-detail', component: RequestDetailComponent },
      { path: 'request-more', component: RequestMoreComponent },
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
      { path: 'setting', component: SettingComponent },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FixerRoutingModule {}
