import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BottomBarComponent } from './components/bottom-bar/bottom-bar.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SuccessComponent } from './components/success/success.component';

const components = [BottomBarComponent, HeaderComponent, SuccessComponent];
@NgModule({
  declarations: [...components, SuccessComponent],
  exports: [...components],
  imports: [CommonModule, RouterModule, IonicModule],
})
export class SharedModule {}
