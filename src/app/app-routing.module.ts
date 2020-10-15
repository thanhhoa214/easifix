import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PendingAfterRequest4Component } from './pending-after-request4/pending-after-request4.component';
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
    path: 'pending-after-request4',
    component: PendingAfterRequest4Component,
  },
  { path: '', pathMatch: 'full', redirectTo: 'welcome' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
