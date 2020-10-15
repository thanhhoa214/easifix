import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SigninComponent } from './signin/signin.component';
import { PromotionScreenComponent } from './promotion-screen/promotion-screen.component';
import { StroreDetailsComponent } from './strore-details/strore-details.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    SigninComponent,
    PromotionScreenComponent,
    StroreDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
