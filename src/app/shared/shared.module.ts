import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BottomBarComponent } from './components/bottom-bar/bottom-bar.component';
import { MaterialModule } from './material.module';
@NgModule({
  declarations: [BottomBarComponent],
  exports: [BottomBarComponent, MaterialModule],
  imports: [CommonModule, MaterialModule],
})
export class SharedModule {}
