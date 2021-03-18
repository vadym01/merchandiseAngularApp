import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-drop-down-nav-bar',
  templateUrl: './drop-down-nav-bar.component.html',
  styleUrls: ['./drop-down-nav-bar.component.css'],
})
export class DropDownNavBarComponent implements OnInit {
  display: boolean = false;
  currentUser: string | null = 'Admin';

  @Output() onDatePicked: EventEmitter<any> = new EventEmitter<any>();

  ngOnInit(): void {
    this.currentUser = localStorage.getItem('currentNavbarChoice');
  }

  changeDisplayStatus() {
    this.display = !this.display;
  }

  changeCurrentUser(user: string) {
    localStorage.setItem('currentNavbarChoice', user);
    this.currentUser = user;
    this.onDatePicked.emit(user);
  }
}
