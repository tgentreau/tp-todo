import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogoutService } from 'src/app/_services/logout.service';

@Component({
  selector: 'app-admin-nav',
  templateUrl: './admin-nav.component.html',
  styleUrls: ['./admin-nav.component.scss']
})
export class AdminNavComponent implements OnInit {

  constructor(private router: Router, private logout: LogoutService) { }

  ngOnInit(): void {
  }

  onClick(): void {
    this.logout.logout()
  }

}
