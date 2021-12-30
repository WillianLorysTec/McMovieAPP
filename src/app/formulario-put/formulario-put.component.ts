import { CurrencyPipe } from '@angular/common';
import { Category } from './../models/Category';
import { ICategorias } from './../searchall/ICategorias';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CategoriasService } from './../searchall/categorias.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario-put',
  templateUrl: './formulario-put.component.html',
  styleUrls: ['./formulario-put.component.css']
})
export class FormularioPutComponent implements OnInit {

  public formPut: FormGroup;
  public contentPut: ICategorias[] = [];

  getFuncionPut(proppsput: Category){
    this.Categoriasservice.MethotPut(proppsput).subscribe(cate => {
    })
  }

  getPropForm(){
    const id: number = this.formPut.controls['id'].value;
    // const aa:number = CurrencyPipe.apply ;
    const title = this.formPut.controls['title'].value;
    const imdb = this.formPut.controls['imdb'].value;
    const price = this.formPut.controls['price'].value;
    const category = this.formPut.controls['category'].value;

    const propsPut = new Category(title, imdb, price, category, id)
    this.getFuncionPut(propsPut);
    // GET function PUT
  }

  constructor(private Categoriasservice: CategoriasService, private fb: FormBuilder) {

    this.formPut = this.fb.group({
      id: ['', Validators.compose([
        Validators.required
      ])],
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
    })

   }

  ngOnInit(): void {
  }

}
