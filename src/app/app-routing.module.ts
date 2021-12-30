import { FormularioPutComponent } from './formulario-put/formulario-put.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioPostComponent } from './formulario-post/formulario-post.component';
import { SearchIdComponent } from './search-id/search-id.component';
import { SearchallComponent } from './searchall/searchall.component';
import { DeleteIdComponent } from './search-id/delete-id/delete-id.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path: 'postfimls', component: FormularioPostComponent },
  {path: 'searchall', component: SearchallComponent},
  {path: 'searchId', component: SearchIdComponent},
  {path: 'putfilms', component: FormularioPutComponent},
  {path: 'delfilms', component: DeleteIdComponent},
  {path: 'login-form', component: LoginComponent }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
