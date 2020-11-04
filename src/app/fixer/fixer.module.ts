import { NgModule } from '@angular/core';
import { FixerRoutingModule } from './fixer-routing.module';
import { HomeComponent } from './home/home.component';
import { SuccessComponent } from './success/success.component';
import { RequestDetailComponent } from './request-detail/request-detail.component';
import { RequestMoreComponent } from './request-more/request-more.component';
import { ProfileComponent } from './profile/profile.component';
import { SharedModule } from '../shared/shared.module';
import { IonicModule } from '@ionic/angular';
import { FixerComponent } from './fixer.component';
import { BottomBarComponent } from './shared/bottom-bar/bottom-bar.component';

@NgModule({
  declarations: [
    HomeComponent,
    SuccessComponent,
    RequestDetailComponent,
    RequestMoreComponent,
    ProfileComponent,
    FixerComponent,
    BottomBarComponent,
  ],
  imports: [SharedModule, IonicModule, FixerRoutingModule],
})
export class FixerModule {}
