import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './Components/users/users.component';
import { UserAddComponent } from './Components/user-add/user-add.component';
import { UserEditComponent } from './Components/user-edit/user-edit.component';
import { RolComponent } from './Components/rol/rol.component';
import { RolAddComponent } from './Components/rol-add/rol-add.component';
import { HomeComponent } from './Components/home/home.component';
import { RolEditComponent } from './Components/rol-edit/rol-edit.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'user', component: UsersComponent },
  { path: 'addUser', component: UserAddComponent },
  {path: 'editUser/:id', component: UserEditComponent},
  {path: 'role', component: RolComponent},
  { path: 'addRole', component: RolAddComponent },
  {path: 'editRole/:id', component: RolEditComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }