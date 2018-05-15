import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersComponent } from './users/users.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
    { 
        path: '',
        children: [
            { path: '' , component: LoginComponent},  
            { path: 'users', component: UsersComponent },  
            { path: '**', redirectTo: '' }]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthenticationRoutingModule { }