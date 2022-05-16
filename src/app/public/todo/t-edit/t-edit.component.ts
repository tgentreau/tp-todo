import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categorie } from 'src/app/interfaces/categorie';
import { CategoriesService } from 'src/app/_services/categories.service';
import { TaskService } from 'src/app/_services/task.service';

@Component({
  selector: 'app-t-edit',
  templateUrl: './t-edit.component.html',
  styleUrls: ['./t-edit.component.scss']
})
export class TEditComponent implements OnInit {

  constructor(
    private categorie: CategoriesService,
    private activated: ActivatedRoute,
    private task: TaskService,
    private router: Router
  ) { }

  form: any = {
    name: '',
    categorie: ''
  }
  catArray: Array<Categorie> = [];
  
  ngOnInit(): void {
    this.catArray = this.getAllCategories()
    let id: string = this.activated.snapshot.paramMap.get('id') as string
    let newId: number = parseInt(id)
    const editTask: Array<Task> = this.task.getById(newId)
    this.form = editTask
  }

  onSubmit(): void {
    let arrTask: Array<Task> = this.task.getAll()
    arrTask.splice(this.form.id, 1, this.form)
    let newTaskArr: string = JSON.stringify(arrTask)
    localStorage.setItem('tâche', newTaskArr)
    this.router.navigate(['home/todo'])
  }

  getAllCategories(): Array<Categorie> {
    return this.categorie.getAll()
  }

}
