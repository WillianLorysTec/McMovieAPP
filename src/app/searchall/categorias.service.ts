import { ICategorias } from './ICategorias';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_PATH } from 'src/environments/environment';
import { Category } from '../models/Category';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  obterTodos(){
   return this.Httpclient.get<ICategorias[]>(`${API_PATH}categories`).toPromise();
  }

  MethotPost(film: Category[]): Observable<Category[]> {
    console.log(film)
    return this.Httpclient.post<Category[]>(`${API_PATH}categories/post`, film);
    
    
  }


  constructor(private Httpclient: HttpClient) {


   }
}

