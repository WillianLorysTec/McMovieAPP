import { Category } from './../models/Category';
import { API_PATH } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormularioService {

 
  constructor(private httppost: HttpClient) {
    
   }
}
