import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { AuthComponent } from './auth.component';
import { NotesComponent } from './notes/notes.component';
import { AddEditComponent } from './notes/add-edit/add-edit.component';
import { ProfileComponent } from './profile/profile.component';
import { TasksComponent } from './tasks/tasks.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AuthComponent,
    NavbarComponent,
    NotesComponent,
    AddEditComponent,
    ProfileComponent,
    TasksComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class AuthModule { }
