import { Component, OnInit } from '@angular/core';
import { faEdit, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  faEdit = faEdit;
  faSignOutAlt = faSignOutAlt;
}
