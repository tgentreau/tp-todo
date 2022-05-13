import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Categorie } from 'src/app/interfaces/categorie';
import { CategoriesService } from 'src/app/_services/categories.service';

@Component({
  selector: 'app-c-add',
  templateUrl: './c-add.component.html',
  styleUrls: ['./c-add.component.scss']
})
export class CAddComponent implements OnInit {

  constructor() { }

  form: any = {
    categorie:  ''
  }


  ngOnInit(): void {
  }

  onSubmit(): void { 
    let catArray: string = localStorage.getItem('categorie') as string
    if(catArray !== null) {
      let arrayCat: Array<Categorie> = JSON.parse(catArray)
      arrayCat.push({ id: arrayCat.length, name: this.form.categorie })
      localStorage.setItem("categorie", JSON.stringify(arrayCat))
    } else {
      let newCatArr = []
      newCatArr.push({ id: newCatArr.length, name: this.form.categorie })
      localStorage.setItem("categorie", JSON.stringify(newCatArr))
    }   
  }
}
