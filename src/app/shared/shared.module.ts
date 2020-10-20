import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BottomBarComponent } from './components/bottom-bar/bottom-bar.component';
import { MaterialModule } from './material.module';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';

const components = [BottomBarComponent, HeaderComponent];
@NgModule({
  declarations: [...components],
  exports: [...components, MaterialModule],
  imports: [CommonModule, RouterModule, MaterialModule],
})
export class SharedModule {}
