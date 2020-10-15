import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
    path: 'pending-after-request3',
    component: PendingAfterRequest3Component,
  },
  { path: '', pathMatch: 'full', redirectTo: 'welcome' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
