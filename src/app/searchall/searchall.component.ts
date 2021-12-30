import { ICategorias } from './ICategorias';
import { Component, OnInit } from '@angular/core';
import { CategoriasService } from './categorias.service';

@Component({
  selector: 'app-searchall',
  templateUrl: './searchall.component.html',
  styleUrls: ['./searchall.component.css']
})
export class SearchallComponent implements OnInit {

  constructor(private categorias: CategoriasService) {
    this.obterTodosCarros();
   }

  ngOnInit(): void {
  }

  title: ICategorias[] = [];

  obterTodosCarros(){
    this.categorias.obterTodos().subscribe(categories => {
      this.title = categories
      console.log(this.title);
      });
  
    }
}
