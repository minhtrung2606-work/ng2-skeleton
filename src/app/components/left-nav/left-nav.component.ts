import { Component, OnInit } from '@angular/core';
import { LeftNavMenuItem } from './left-nav-menu-item/model/left-nav-menu-item';

@Component({
  selector: 'left-nav',
  templateUrl: './left-nav.component.html',
  styleUrls: ['./left-nav.component.css']
})
export class LeftNavComponent implements OnInit {
  private menuItem: LeftNavMenuItem;
  private currentMenuItem: LeftNavMenuItem;
  private currentSubMenuItem: LeftNavMenuItem;
  private activeIcon: string;
  private inActiveIcon: string;
  private collapsed: boolean;

  private menuItemList: Array<LeftNavMenuItem>;

  constructor() {
    this.menuItem = new LeftNavMenuItem('Profile');
    this.activeIcon = 'fa-minus-circle';
    this.inActiveIcon = 'fa-plus-circle';
    this.menuItemList = [];
    this.collapsed = false;
  }

  ngOnInit() {
    this.menuItem.setStartIcon('fa-file');

    let appraisalProfile = new LeftNavMenuItem('Appraisal Profile');
    appraisalProfile
      .setStatistic(true)
      .setCount(12)
    ;

    this.menuItem
      .addSubMenuItem(appraisalProfile)
      .addSubMenuItem(new LeftNavMenuItem('Pending Approval'))
    ;

    this.menuItemList.push(this.menuItem);

    let anotherMenuItem = new LeftNavMenuItem('Debt').setStartIcon('fa-suitcase');
    let debtProfile = new LeftNavMenuItem('Debt Profile');
    let paidProfile = new LeftNavMenuItem('Paid Profile');

    anotherMenuItem.addSubMenuItem(debtProfile);
    anotherMenuItem.addSubMenuItem(paidProfile);

    this.menuItemList.push(anotherMenuItem);
  }

  onLeftNavMenuItemClicked(menuItem: LeftNavMenuItem): void {
    if (menuItem.isActive()) {
      // Activated menu item is clicked again and de-activate it
      menuItem
        .setActive(false)
      ;
      return;
    }

    if (this.currentMenuItem) {
      // Remove current active menu item before activating another one
      this.currentMenuItem
        .setActive(false)
      ;
    }

    // Activate passed in menu item
    this.currentMenuItem =  menuItem;
    this.currentMenuItem
      .setActive(true)
    ;
  }

  onLeftNavSubMenuItemClicked(subMenuItem: LeftNavMenuItem): void {
    if (this.currentSubMenuItem) {
      // Remove current active sub menu item before activating another one
      this.currentSubMenuItem
        .setActive(false)
      ;
    }

    // Activate passed in sub menu item
    this.currentSubMenuItem =  subMenuItem;
    this.currentSubMenuItem
      .setActive(true)
    ;
  }

  toggleCollapse(): void {
    this.collapsed = !this.collapsed;
  }

}
