import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  getAll(): Array<User> {
    const userArray: any = localStorage.getItem('users')
    const users: Array<User> = JSON.parse(userArray)
    return users
  }

  getById(id:number): Array<User> {
    const userArray: any = localStorage.getItem('users')
    const users: Array<User> = JSON.parse(userArray)
    let editUser: any = []
    editUser = users.find(e => e.id === id)
    return editUser
  }
}
