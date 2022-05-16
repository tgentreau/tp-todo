import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LogoutService {

  constructor(private router: Router) { }

  logout(): void {
    const token_admin: string = localStorage.getItem('admin-token') as string
    const token_user: string = localStorage.getItem('user-token') as string
    if(token_admin) {
      localStorage.removeItem('admin-token')
      this.router.navigate(['auth'])
    }
    if(token_user) {
      localStorage.removeItem('user-token')
      localStorage.removeItem('id')
      this.router.navigate(['auth'])
    }
  }
}
