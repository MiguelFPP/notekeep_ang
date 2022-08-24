import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';
import { AuthComponent } from './auth.component';
import { NotesComponent } from './notes/notes.component';
import { AddEditComponent } from './notes/add-edit/add-edit.component';
import { ProfileComponent } from './profile/profile.component';
import { TasksComponent } from './tasks/tasks.component';
import { SpinnerComponent } from '../components/spinner/spinner.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AuthComponent,
    NavbarComponent,
    NotesComponent,
    AddEditComponent,
    ProfileComponent,
    TasksComponent,
    SpinnerComponent,
  ],
  imports: [CommonModule, RouterModule, FormsModule],
})
export class AuthModule {}
