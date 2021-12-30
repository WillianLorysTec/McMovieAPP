import { Category } from './../models/Category';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoriasService } from '../searchall/categorias.service';


@Component({
  selector: 'app-formulario-post',
  templateUrl: './formulario-post.component.html',
  styleUrls: ['./formulario-post.component.css']
})
export class FormularioPostComponent  {

  public form: FormGroup;
  public postSet: Category[] = [];

  PostHttp(post: Category){
    this.categorias.MethotPost(post).subscribe(categories => {   
      console.log("ok")  ;
      })}

  add(){
    const titles = this.form.controls['title'].value;
    const imdb = this.form.controls['imdb'].value;
    const price = this.form.controls['price'].value;
    const category = this.form.controls['category'].value;  
    //this.postSet.push(new Category(titles, imdb, price, category));
    const postSetHttp = new Category(titles, imdb, price, category);
    this.save();
    this.PostHttp(postSetHttp);

    ///this.categorias.MethotPost(this.postSet);
    ///implementar POST

    

  }
  
  
  save(){
    const data = JSON.stringify(this.postSet)
    localStorage.setItem('categoria', data);
    console.log("stop")
  }

  constructor(private fb: FormBuilder, private categorias: CategoriasService ) {

    this.form = this.fb.group({
      title: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(60),
        Validators.required
      ])],
      imdb: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(60),
        Validators.required ])],
      price: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(60),
        Validators.required ])],
      category: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(60),
        Validators.required ])]

        
  });
  }



}
