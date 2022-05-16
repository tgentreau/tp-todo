import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categorie } from 'src/app/interfaces/categorie';
import { CategoriesService } from 'src/app/_services/categories.service';

@Component({
  selector: 'app-c-edit',
  templateUrl: './c-edit.component.html',
  styleUrls: ['./c-edit.component.scss']
})
export class CEditComponent implements OnInit {

  constructor(
    private activated: ActivatedRoute, 
    private categorie: CategoriesService,
    private router: Router
  ) { }

  form: any = {
    name: ''
  }

  ngOnInit(): void {
    let id: string = this.activated.snapshot.paramMap.get('id') as string
    let newId: number = parseInt(id)
    const editCat: Array<Categorie> = this.categorie.getById(newId)
    this.form = editCat
  }

  onSubmit(): void {
    let arrCat: Array<Categorie> = this.categorie.getAll()
    arrCat.splice(this.form.id, 1, this.form)
    let newCatArr: string = JSON.stringify(arrCat)
    localStorage.setItem('categorie', newCatArr)
    this.router.navigate(['admin/categories'])
  }

}
