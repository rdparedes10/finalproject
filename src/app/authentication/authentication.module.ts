import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { LoginComponent } from './login/login.component';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import {
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatInputModule,
  MatProgressSpinnerModule,
  MatDialogModule,
  MatCheckboxModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatCheckboxModule
  ],
  declarations: [UsersComponent, LoginComponent],
})
export class AuthenticationModule { }
