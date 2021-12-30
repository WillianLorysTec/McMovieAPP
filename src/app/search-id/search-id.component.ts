
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ICategorias } from '../searchall/ICategorias';
import { CategoriasService } from '../searchall/categorias.service';


@Component({
  selector: 'app-search-id',
  templateUrl: './search-id.component.html',
  styleUrls: ['./search-id.component.css']
})
export class SearchIdComponent implements OnInit {

  contentById: ICategorias[] = [];
  public formId: FormGroup;
  

  CallPost(id: number){
    this.Categoriasservice.GetById(id).subscribe( cate => {
      this.contentById = cate;
      console.log(this.contentById);
    })
  }
  IdFromForm(){
    const Id = this.formId.controls['id'].value;
    
    // chamar funçao Call para G
    this.CallPost(Id);
    console.log("este é o id antes do func" + Id);
  }
  constructor(private Categoriasservice: CategoriasService ,private fb: FormBuilder) {
    
    this.formId = fb.group({
      id: ['', Validators.compose([
        Validators.required     
      ])]
    })
   }

  ngOnInit(): void {
  }

}
