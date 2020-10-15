import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SigninComponent } from './signin/signin.component';
import { StoreCallDetailsComponent } from './store-call-details/store-call-details.component';
import { BookProcessComponent } from './book-process/book-process.component';
import { BookSuccessComponent } from './book-success/book-success.component';
import { BookFailedComponent } from './book-failed/book-failed.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    SigninComponent,
    StoreCallDetailsComponent,
    BookProcessComponent,
    BookSuccessComponent,
    BookFailedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
