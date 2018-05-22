import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './employee/employee.component';
import { MatTableModule, MatPaginatorModule, MatSortModule, MatNativeDateModule } from '@angular/material';
import { OverlayModule } from '@angular/cdk/overlay';
import { EmployeeCRUDComponent } from './employee-crud/employee-crud.component';
import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material';
import {
  MatCardModule,
  MatIconModule,
  MatInputModule,
  MatProgressSpinnerModule,
  MatSelectModule,
  MatDialogModule,
  MatCheckboxModule, MatToolbarModule, MatSidenavModule, MatListModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    OverlayModule,
    MatButtonModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatSidenavModule,
    MatDatepickerModule,
    MatNativeDateModule, 
    MatListModule,
    MatSelectModule
  ],
  declarations: [EmployeeComponent,EmployeeCRUDComponent],
  exports:[EmployeeComponent],
  providers:[OverlayModule]
})
export class EmployeesModule { }
