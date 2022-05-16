import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../interfaces/user';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  constructor(private router: Router) { }

  form = {
    pseudo: '',
    password: ''
  }

  userArray: Array<User> = []

  ngOnInit(): void {
    const admin: User = {
      id: 0,
      name: 'toto',
      password: 'roger',
      admin: true
    }
    this.userArray.push(admin)
  }

  onSubmit(): void {
    this.userArray.push({ id: this.userArray.length, name: this.form.pseudo, password: this.form.password, admin: false })
    localStorage.setItem('users', JSON.stringify(this.userArray))
    this.router.navigate(['login'])
  }
}
