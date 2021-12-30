import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioPostComponent } from './formulario-post/formulario-post.component';

import { SearchIdComponent } from './search-id/search-id.component';
import { FormularioPutComponent } from './formulario-put/formulario-put.component';
import { SearchallComponent } from './searchall/searchall.component';
import { DeleteIdComponent } from './search-id/delete-id/delete-id.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioPostComponent,
    SearchallComponent,
    SearchIdComponent,
    FormularioPutComponent,
    DeleteIdComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
