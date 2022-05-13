import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from 'src/app/_services/users.service';

@Component({
  selector: 'app-u-delete',
  templateUrl: './u-delete.component.html',
  styleUrls: ['./u-delete.component.scss']
})
export class UDeleteComponent implements OnInit {

  user: any = {
    name: ''
  }

  constructor(
    private activated: ActivatedRoute,
    private users: UsersService,
    private router: Router
  ) { }

  ngOnInit(): void {
    let id: string = this.activated.snapshot.paramMap.get('id') as string
    let newId = parseInt(id)
    const deleteUser= this.users.getById(newId)
    this.user = deleteUser
    console.log(this.user);
  }

  delete(id: number) {
    let arrUser = this.users.getAll()
    arrUser.splice(id, 1)
    let newUserArr = JSON.stringify(arrUser)
    localStorage.setItem('users', newUserArr)
    this.router.navigate(['admin/users'])
  }

}
