import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsModule } from '../projects/projects.module';
import { EmployeesModule } from '../employees/employees.module';
import { AdministrateService } from './administrate.service';


@NgModule({
  imports: [
    CommonModule,
    ProjectsModule,
    EmployeesModule
  ],
  declarations: [],
  providers:[AdministrateService]
})
export class SharedModule { }
