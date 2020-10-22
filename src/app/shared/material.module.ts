import { NgModule } from '@angular/core';
import {
  MatSnackBar,
  MAT_SNACK_BAR_DEFAULT_OPTIONS,
} from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {
  MatFormFieldModule,
  MAT_FORM_FIELD_DEFAULT_OPTIONS,
} from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatNativeDateModule } from '@angular/material/core';
import { CdkColumnDef } from '@angular/cdk/table';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
const componentModules = [
  MatToolbarModule,
  MatButtonModule,
  MatDividerModule,
  MatButtonToggleModule,
  MatIconModule,
  MatBadgeModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatRadioModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatTooltipModule,
  MatCheckboxModule,
  MatMomentDateModule,
];

@NgModule({
  imports: componentModules,
  exports: componentModules,
  providers: [
    MatSnackBar,
    CdkColumnDef,
    MatDatepickerModule,
    BreakpointObserver,
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { appearance: 'outline' },
    },
    { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: { duration: 3000 } },
  ],
})
export class MaterialModule {}
