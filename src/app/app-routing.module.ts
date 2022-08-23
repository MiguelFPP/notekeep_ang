import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { AddEditComponent } from './auth/notes/add-edit/add-edit.component';
import { NotesComponent } from './auth/notes/notes.component';
import { TasksComponent } from './auth/tasks/tasks.component';
import { AuthGuard } from './core/auth.guard';
import { LoginComponent } from './public/login/login.component';
import { PublicComponent } from './public/public.component';
import { RegisterComponent } from './public/register/register.component';

const routes: Routes = [
  {
    path: '',
    component: PublicComponent,
    children: [
      { path: '', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
    ],
  },
  {path:'user', component:AuthComponent, canActivate:[AuthGuard],children:[
    {path:'', component:NotesComponent},
    {path:'add', component:AddEditComponent},
    {path:'edit/:id', component:AddEditComponent},
    /* tasks */
    {path:'tasks', component:TasksComponent},
  ]},
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
