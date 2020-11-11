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
import { IonicRatingModule } from 'ionic-rating';
import { CommonModule } from '@angular/common';
import { HistoryCompletedComponent } from './history-completed/history-completed.component';
import { HistoryProcessingComponent } from './history-processing/history-processing.component';

@NgModule({
  declarations: [
    HomeComponent,
    SuccessComponent,
    RequestDetailComponent,
    RequestMoreComponent,
    ProfileComponent,
    FixerComponent,
    BottomBarComponent,
    HistoryCompletedComponent,
    HistoryProcessingComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
    IonicRatingModule,
    SharedModule,
    FixerRoutingModule,
  ],
})
export class FixerModule {}
