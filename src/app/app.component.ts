import { Component } from '@angular/core';
import { Categorie } from './interfaces/categorie';
import { Task } from './interfaces/task';
import { User } from './interfaces/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'todolist-per-user';
  tache: string = "";
  user: string = "";
  categorie: string = "";
  userTask: string = "";
  catTask: string = "";
  task: Array<Task> = [];
  userArray: Array<User> = [];
  catArray: Array<Categorie> = [];
  doneTaskArray: Array<Task> = []
  sortTask: string = ""
  filterTaskArray: Array<Task> = []
  filterTaskByUser: Array<Task> = []

  // addUser() {
  //   if(this.user !== "") {
  //     this.userArray.push({ id: this.userArray.length, name: this.user })
  //     localStorage.setItem("user", JSON.stringify(this.userArray))
  //     this.user = ""
  //   }
  // }
  
  addCategorie() {
    if(this.categorie !== "") {
      this.catArray.push({ id: this.catArray.length, name: this.categorie })
      localStorage.setItem("categorie", JSON.stringify(this.catArray))
      this.categorie = ""
    }
  }

  addTask() {
    if(this.tache !== "") {
      this.task.push(
        { 
          id: this.task.length, 
          name: this.tache, 
          categorie: this.catTask, 
          done: false, 
          user: this.userTask 
        }
      )
      localStorage.setItem("tâche", JSON.stringify(this.task))
      this.tache = ""
    }
  }
  
  deleteTask(id: number) {
    this.task = this.task.filter(item => item.id !== id)
  }

  deleteTaskDone(id: number) {
    this.doneTaskArray = this.doneTaskArray.filter(item => item.id !== id)
  }

  doneTask(id: number, name: string, categorie: string, user: string, done: boolean) {
    done = true
    this.doneTaskArray.push(
      {
        id,
        name,
        categorie,
        user,
        done
      }
    )
    this.filterTaskByUser.splice(id)
  }

  sortTaskByCat(cat: string) {
    this.filterTaskArray = []
    this.filterTaskArray = this.task.filter(item => item.categorie === cat)
    setTimeout(() => {
      console.log(this.filterTaskArray);
      console.log('categorie: ',cat);
      document.querySelectorAll('.sort').forEach((item) => {
        item.classList.replace('d-none', 'd-block')
      })
      document.querySelectorAll('.test').forEach((item) => {
        item.classList.replace('d-block', 'd-none')
      })
    }, 100)
  }

  removeSort() {
    document.querySelectorAll('.sort').forEach((item) => {
      item.classList.replace('d-block','d-none')
    })
    document.querySelectorAll('.test').forEach((item) => {
      item.classList.replace('d-none', 'd-block')
    })
  }

  sortTaskByUser(user: string) {
    this.filterTaskByUser = []
    this.filterTaskByUser = this.task.filter(item => item.user === user)
  }
}

