import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { Task } from 'src/app/interfaces/task';
import { UsersService } from 'src/app/_services/users.service';

@Component({
  selector: 'app-u-index',
  templateUrl: './u-index.component.html',
  styleUrls: ['./u-index.component.scss']
})
export class UIndexComponent implements OnInit {

  constructor(private users: UsersService) { }

  userTask: string = "";
  task: Array<Task> = [];
  items: Array<User> = []
  
  ngOnInit(): void {
    this.items = this.getAllUsers()
  }

  getAllUsers(): Array<User> {
    return this.users.getAll()
  }

  sortTaskByUser(user: string): Array<Task> {
    let filterTaskByUser: Array<Task> = []
    filterTaskByUser = this.task.filter(item => item.user === user)
    return filterTaskByUser
  }

}
