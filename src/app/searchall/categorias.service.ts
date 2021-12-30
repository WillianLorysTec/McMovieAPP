import { Category } from './../models/Category';
import { API_PATH } from './../../environments/environment';
import { ICategorias } from './ICategorias';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  obterTodos(){
   return this.Httpclient.get<ICategorias[]>(`${API_PATH}categories`);
  }

  GetById(id: number){
    return this.Httpclient.get<ICategorias[]>(`${API_PATH}categories/${id}`);
  }

  MethotPost(film: Category): Observable<Category> {
    console.log(film)
    return this.Httpclient.post<Category>(`${API_PATH}categories/post`, film);
  }

  MethotPut(contentput: Category): Observable<Category>{
    return this.Httpclient.put<Category>(`${API_PATH}categories/put`, contentput)
  }

  MethotDelete(contentIdDelete: number){
    return this.Httpclient.delete(`${API_PATH}categories/del/${contentIdDelete}`)

  }


  constructor(private Httpclient: HttpClient) {


   }
}

