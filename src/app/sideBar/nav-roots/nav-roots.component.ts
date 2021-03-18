import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-roots',
  templateUrl: './nav-roots.component.html',
  styleUrls: ['./nav-roots.component.css'],
})
export class NavRoots implements OnInit {
  selectedAdmin: any;

  constructor() {}

  ngOnInit(): void {
    this.selectedAdmin = localStorage.getItem('currentNavbarChoice');
  }

  changeCurrentUser(user: string) {
    this.selectedAdmin = user;
    console.log(user);
  }
}
