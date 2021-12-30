import { CategoriasService } from './../../searchall/categorias.service';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete-id',
  templateUrl: './delete-id.component.html',
  styleUrls: ['./delete-id.component.css']
})
export class DeleteIdComponent implements OnInit {

  constructor(private fb: FormBuilder, private Categoriasservice: CategoriasService ) {
    this.formDelete = this.fb.group({
      idFromForm: ['', Validators.compose([
        Validators.required
      ])]
    })
   }

   formDelete: FormGroup;
   GetIdDelete(){
     const idDelete = this.formDelete.controls['idFromForm'].value;   
     this.GetFuncDel(idDelete);
     // GET NA FUNC DELETE
   }

   GetFuncDel(content: number){
    this.Categoriasservice.MethotDelete(content).subscribe( cate => {
    })
   }


  ngOnInit(): void {
  }

}
