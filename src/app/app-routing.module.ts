import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PendingAfterRequest2Component } from './pending-after-request2/pending-after-request2.component';
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
    path: 'pending-after-request2',
    component: PendingAfterRequest2Component,
  },
  { path: '', pathMatch: 'full', redirectTo: 'welcome' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
