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
      .setActive(true)
    ;

    let appraisalProfile = new LeftNavMenuItem('Appraisal Profile');
    appraisalProfile
      .setStartIcon('fa-angle-right')
      .setStatistic(true)
      .setCount(12)
    ;

    this.menuItem
      .addSubMenuItem(appraisalProfile)
      .addSubMenuItem(new LeftNavMenuItem('Pending Approval').setStartIcon('fa-angle-right'))
    ;
  }

  onPrimaryItemClicked(menuItem: LeftNavMenuItem): void {
    menuItem.setActive(!menuItem.isActive());
  }

  onSecondaryItemClicked(subMenuItem: LeftNavMenuItem): void {
    subMenuItem.setActive(!subMenuItem.isActive());
  }

}
