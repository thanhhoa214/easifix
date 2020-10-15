import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookFailedComponent } from './book-failed/book-failed.component';
import { BookProcessComponent } from './book-process/book-process.component';
import { BookSuccessComponent } from './book-success/book-success.component';
import { SigninComponent } from './signin/signin.component';
import { StoreCallDetailsComponent } from './store-call-details/store-call-details.component';
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
    path: 'store-call-details',
    component: StoreCallDetailsComponent,
  },{
    path: 'book-process',
    component: BookProcessComponent,
  }
  ,
  {
    path: 'book-success',
    component: BookSuccessComponent,
  }, {
    path: 'book-failed',
    component: BookFailedComponent,
  },
  { path: '', pathMatch: 'full', redirectTo: 'welcome' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
