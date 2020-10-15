import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotificationScreenComponent } from './notification-screen/notification-screen.component';
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
    path: 'notification-screen',
    component: NotificationScreenComponent,
  },
  { path: '', pathMatch: 'full', redirectTo: 'welcome' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
