import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './authentication-guard';
import { EmployeeComponent } from '../employees/employee/employee.component';
import { ProjectComponent } from '../projects/project/project.component';
import { EmployeeCRUDComponent } from '../employees/employee-crud/employee-crud.component';

const routes: Routes = [
    { 
        path: '',
        children: [
            { path: '' , component: LoginComponent},  
            { path: 'home/:id', component: HomeComponent, canActivate:[AuthGuard],children: [
                {path:'employees',  component: EmployeeComponent},
                {path:'projects',  component: ProjectComponent}]},
            { path: '**', redirectTo: '' }]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers:[AuthGuard]
})
export class AuthenticationRoutingModule { }