import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PromotionScreenComponent } from './promotion-screen/promotion-screen.component';
import { SigninComponent } from './signin/signin.component';
import { StroreDetailsComponent } from './strore-details/strore-details.component';
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
  },{
    path: 'store-details',
    component: StroreDetailsComponent,
  },
  { path: '', pathMatch: 'full', redirectTo: 'welcome' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
