import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/_services/token.service';
import { User } from '../../interfaces/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private token: TokenService) { }

  form = {
    pseudo: '',
    password: ''
  }
  item: any = localStorage.getItem('users')
  userArray: Array<User> = JSON.parse(this.item)

  ngOnInit(): void {
  }

  onSubmit(): void {
    const test = this.userArray.find(e=> e.name == this.form.pseudo && e.password == this.form.password)
    if(test?.admin) {
      this.token.saveTokenAdmin()
    } else if(test){
      localStorage.setItem('id', test.id.toString())
      this.token.saveTokenUser()
    }
  }
}
