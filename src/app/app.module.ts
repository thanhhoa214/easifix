import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SigninComponent } from './signin/signin.component';
import { PendingAfterRequest4Component } from './pending-after-request4/pending-after-request4.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    SigninComponent,
    PendingAfterRequest4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
