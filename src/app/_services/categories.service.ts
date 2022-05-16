import { Injectable } from '@angular/core';
import { Categorie } from '../interfaces/categorie';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor() { }

  getAll():Array<Categorie> {
    const catArray: string = localStorage.getItem('categorie') as string
    const categorie: Array<Categorie> = JSON.parse(catArray)
    return categorie
  }

  getById(id: number): Array<Categorie> {
    const catArray: string = localStorage.getItem('categorie') as string
    const cats: Array<Categorie> = JSON.parse(catArray)
    let editCat: any = []
    editCat = cats.find(e => e.id === id)
    return editCat
  }
}
