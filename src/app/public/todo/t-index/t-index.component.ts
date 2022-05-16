import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/interfaces/task';

@Component({
  selector: 'app-t-index',
  templateUrl: './t-index.component.html',
  styleUrls: ['./t-index.component.scss']
})
export class TIndexComponent implements OnInit {

  constructor() { }
  items: Array<Task> = []
  doneTaskArray: Array<Task> = []

  ngOnInit(): void {
    const currentUserId: string = localStorage.getItem('id') as string
    this.items = this.getAllTaskByUserId(currentUserId)
    if(this.doneTaskArray.length > 0) {
      this.doneTaskArray = this.getAllTaskDoneByUserId(currentUserId)
    }
  }

  getAllTaskByUserId(id: string): any {
    const taskArray: string = localStorage.getItem('tâche') as string
    const task: Array<Task> = JSON.parse(taskArray)
    if(task) {
      const taskByUser = task.filter(e=> e.user === id)
      return taskByUser
    }
  }

  getAllTaskDoneByUserId(id: string): any {
    const taskArray: string = localStorage.getItem('done-task') as string
    if(taskArray) {
      const task: Array<Task> = JSON.parse(taskArray)
      const taskByUser = task.filter(e=> e.user === id)
      return taskByUser
    } 
  }

  doneTask(id: number, name: string, categorie: string, user: string, done: boolean): void {
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
    localStorage.setItem('done-task', JSON.stringify(this.doneTaskArray))
    this.deleteTask(id)
  }

  deleteDoneTask(id: number): void {
    this.doneTaskArray.splice(id, 1)
    const newDoneTask = JSON.stringify(this.doneTaskArray)
    localStorage.setItem('done-task', newDoneTask)
  }

  deleteTask(id: number): void {
    this.items.splice(id, 1)
    const newDoneTask = JSON.stringify(this.items)
    localStorage.setItem('tâche', newDoneTask)
  }

}
