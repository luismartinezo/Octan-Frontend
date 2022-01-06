import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './Components/users/users.component';
import { UserAddComponent } from './Components/user-add/user-add.component';
import { UserEditComponent } from './Components/user-edit/user-edit.component';

const routes: Routes = [
  { path: '', component: UsersComponent },
  { path: 'add', component: UserAddComponent },
  {path: 'edit/:id', component: UserEditComponent},
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