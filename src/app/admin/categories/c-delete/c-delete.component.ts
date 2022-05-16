import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriesService } from 'src/app/_services/categories.service';

@Component({
  selector: 'app-c-delete',
  templateUrl: './c-delete.component.html',
  styleUrls: ['./c-delete.component.scss']
})
export class CDeleteComponent implements OnInit {

  cat: any = {
    name: ''
  }

  constructor(
    private activated: ActivatedRoute,
    private categorie: CategoriesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    let id: string = this.activated.snapshot.paramMap.get('id') as string
    let newId = parseInt(id)
    const deleteCat = this.categorie.getById(newId)
    this.cat = deleteCat
  }

  delete(id: number): void {
    let arrCat = this.categorie.getAll()
    arrCat.splice(id, 1)
    let newCatArr = JSON.stringify(arrCat)
    localStorage.setItem('categorie', newCatArr)
    this.router.navigate(['admin/categories'])
  }
}
