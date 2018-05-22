import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from './project/project.component';
import { MatTableModule, MatPaginatorModule, MatSortModule, MatFormFieldModule } from '@angular/material';
import {
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatInputModule,
  MatProgressSpinnerModule,
  MatDialogModule,
  MatCheckboxModule, MatToolbarModule, MatSidenavModule, MatListModule
} from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import { ProjectCRUDComponent } from './project-crud/project-crud.component';

@NgModule({
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatInputModule
  ],
  declarations: [ProjectComponent, ProjectCRUDComponent]
})
export class ProjectsModule { }
