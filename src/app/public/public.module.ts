import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';


import { PublicComponent } from './public.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [PublicComponent, LoginComponent, RegisterComponent, NavbarComponent],
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
})
export class PublicModule {}
