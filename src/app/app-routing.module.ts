import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PendingAfterRequest1Component } from './pending-after-request1/pending-after-request1.component';
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
    path: 'pending-after-request1',
    component: PendingAfterRequest1Component,
  },
  { path: '', pathMatch: 'full', redirectTo: 'welcome' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
