import { Component, OnInit } from '@angular/core';
import { LeftNavMenuItem } from './model/left-nav-menu-item';

@Component({
  selector: 'left-nav-menu-item',
  templateUrl: './left-nav-menu-item.component.html',
  styleUrls: ['./left-nav-menu-item.component.css']
})
export class LeftNavMenuItemComponent implements OnInit {
  private menuItem: LeftNavMenuItem;

  constructor() {
    this.menuItem = new LeftNavMenuItem('Profile');
  }

  ngOnInit() {
    this.menuItem
      .setStartIcon('fa-file')
      .setEndIcon('fa-angle-right')
    ;
  }

}
