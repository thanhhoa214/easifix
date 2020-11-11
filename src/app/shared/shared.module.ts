import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BottomBarComponent } from './components/bottom-bar/bottom-bar.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SuccessComponent } from './components/success/success.component';
import { FailedComponent } from './components/failed/failed.component';
import { ProfileUpdateSuccessComponent } from './profile-update-success/profile-update-success.component';
import { HomeSearchModalComponent } from './components/home-search-modal/home-search-modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrandSelectComponent } from './components/brand-select/brand-select.component';
import { IonicRatingModule } from 'ionic-rating';
import { VideoCapturePlus } from '@ionic-native/video-capture-plus';

const components = [
  BottomBarComponent,
  HeaderComponent,
  SuccessComponent,
  FailedComponent,
  ProfileUpdateSuccessComponent,
  HomeSearchModalComponent,
];
@NgModule({
  declarations: [...components, BrandSelectComponent],
  exports: [...components],
  imports: [
    CommonModule,
    RouterModule,
    IonicModule,
    IonicRatingModule,
    ReactiveFormsModule,
  ],
  providers: [VideoCapturePlus],
})
export class SharedModule {}
