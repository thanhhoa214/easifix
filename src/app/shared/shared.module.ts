import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BottomBarComponent } from './components/bottom-bar/bottom-bar.component';
import { MaterialModule } from './material.module';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { CalendarComponent } from './components/calendar/calendar.component';

const components = [BottomBarComponent, HeaderComponent, CalendarComponent];
@NgModule({
  declarations: [...components],
  exports: [...components, MaterialModule],
  imports: [CommonModule, RouterModule, MaterialModule],
})
export class SharedModule {}
