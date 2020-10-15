import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SigninComponent } from './signin/signin.component';
import { ConfirmRequestAddressComponent } from './confirm-request-address/confirm-request-address.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    SigninComponent,
    ConfirmRequestAddressComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
