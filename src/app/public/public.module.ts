import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicComponent } from './public.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [PublicComponent, LoginComponent, RegisterComponent, NavbarComponent],
  imports: [CommonModule],
})
export class PublicModule {}
