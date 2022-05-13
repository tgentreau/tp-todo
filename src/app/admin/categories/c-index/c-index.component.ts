import { Component, OnInit } from '@angular/core';
import { Categorie } from 'src/app/interfaces/categorie';
import { CategoriesService } from 'src/app/_services/categories.service';

@Component({
  selector: 'app-c-index',
  templateUrl: './c-index.component.html',
  styleUrls: ['./c-index.component.scss']
})
export class CIndexComponent implements OnInit {

  items: Array<Categorie> = []

  constructor(private categorie: CategoriesService) { }

  ngOnInit(): void {
    this.items = this.getAllCategories()
  }

  getAllCategories(): Array<Categorie> {
    return this.categorie.getAll()
  }

}
