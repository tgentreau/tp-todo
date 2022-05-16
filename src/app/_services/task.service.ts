import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  getAll():Array<Task> {
    const taskArray: string = localStorage.getItem('tâche') as string
    const task: Array<Task> = JSON.parse(taskArray)
    return task
  }

  getById(id: number): Array<Task> {
    const taskArray: string = localStorage.getItem('tâche') as string
    const tasks: any = JSON.parse(taskArray)
    let editTask: any = []
    editTask = tasks.find((e: { id: number; }) => e.id === id)
    return editTask
  }
}
