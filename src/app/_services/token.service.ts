import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private router: Router) { }

  saveTokenAdmin(): void {
    localStorage.setItem('admin-token', 'fhiuehfiehuiphiphapihaizhihguyidz')
    this.router.navigate(['admin'])
  }

  saveTokenUser(): void {
    localStorage.setItem('user-token', 'oiufgbhuigbhjuigjnhopjnphojbjibhiufg')
    this.router.navigate(['home'])
  }

  isLoggedAdmin(): boolean {
    const token = localStorage.getItem('admin-token')
    return !! token
  }

  isLoggedUser(): boolean {
    const token = localStorage.getItem('user-token')
    return !! token
  }
}
