import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioPostComponent } from './formulario-post/formulario-post.component';
import { SearchallComponent } from './searchall/searchall.component';

const routes: Routes = [
  {path: 'postfimls', component: FormularioPostComponent },
  {path: 'searchall', component: SearchallComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
