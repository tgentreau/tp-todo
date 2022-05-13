import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categorie } from 'src/app/interfaces/categorie';
import { CategoriesService } from 'src/app/_services/categories.service';

@Component({
  selector: 'app-t-add',
  templateUrl: './t-add.component.html',
  styleUrls: ['./t-add.component.scss']
})
export class TAddComponent implements OnInit {

  constructor(
    private categorie: CategoriesService,
    private router: Router
  ) { }

  form: any = {
    name: '',
    categorie: ''
  }
  catArray: Array<Categorie> = [];

  ngOnInit(): void {
    this.catArray = this.getAllCategories()
  }

  getAllCategories(): Array<Categorie> {
    return this.categorie.getAll()
  }

  onSubmit() {
    const id: string = localStorage.getItem('id') as string
    let taskArray: string = localStorage.getItem('tâche') as string
    if(taskArray !== null) {
      let arrayTask: any = JSON.parse(taskArray)
      arrayTask.push(
        { 
          id: arrayTask.length, 
          name: this.form.name, 
          categorie: this.form.categorie, 
          done: false, 
          user: id 
        }
      )
      localStorage.setItem("tâche", JSON.stringify(arrayTask))
      this.router.navigate(['home/todo'])
    } else {
      let newArrTask = []
      newArrTask.push(
        { 
          id: newArrTask.length, 
          name: this.form.name, 
          categorie: this.form.categorie, 
          done: false, 
          user: id 
        }
      )
      localStorage.setItem("tâche", JSON.stringify(newArrTask))
      this.router.navigate(['home/todo'])
    }
  }

}
