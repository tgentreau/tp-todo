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
    if(this.items) {
      this.items = this.getAllTaskByUserId(currentUserId)
    }
    if(this.doneTaskArray) {
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
    } else {
      localStorage.setItem('done-task', '')
    }
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
    localStorage.setItem('done-task', JSON.stringify(this.doneTaskArray))
    const task: string = localStorage.getItem('tâche') as string
    const updateTask: any = JSON.parse(task)
    updateTask.push(this.items)
    updateTask.splice(id)
    const newUpdateTask: string = JSON.stringify(updateTask)
    localStorage.setItem('tâche', newUpdateTask)
    location.reload()
  }

  deleteDoneTask(id: number) {
    this.doneTaskArray.splice(id)
    const newDoneTask = JSON.stringify(this.doneTaskArray)
    localStorage.setItem('done-task', newDoneTask)
  }

}
