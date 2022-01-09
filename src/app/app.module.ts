
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { UsersComponent } from './Components/users/users.component';
import { FooterComponent } from './Shared/footer/footer.component';
import { NavComponent } from './Shared/nav/nav.component';
import { UserAddComponent } from './Components/user-add/user-add.component';
import { UserEditComponent } from './Components/user-edit/user-edit.component';
import { ToastrModule } from 'ngx-toastr';
import { SearchComponent } from './Components/search/search.component';
import { SearchPipe } from './Pipes/search.pipe';
import { RolComponent } from './Components/rol/rol.component';
import { RolAddComponent } from './Components/rol-add/rol-add.component';
import { RolEditComponent } from './Components/rol-edit/rol-edit.component';
import { HomeComponent } from './Components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    UsersComponent,
    UserAddComponent,
    UserEditComponent,
    SearchComponent,
    SearchPipe,
    RolComponent,
    RolAddComponent,
    RolEditComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
