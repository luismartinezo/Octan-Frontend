
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

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    UsersComponent,
    UserAddComponent,
    UserEditComponent,
    SearchComponent,
    SearchPipe
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
