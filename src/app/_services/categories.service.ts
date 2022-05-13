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

  getById(id:number):Array<Categorie> {
    const userArray: string = localStorage.getItem('categorie') as string
    const users: Array<Categorie> = JSON.parse(userArray)
    let editUser: any = []
    editUser = users.find(e => e.id === id)
    return editUser
  }
}
