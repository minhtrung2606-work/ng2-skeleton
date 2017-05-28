import { Component, OnInit, Input } from '@angular/core';
import { LeftNavMenuItem } from './left-nav-menu-item/model/left-nav-menu-item';

@Component({
  selector: 'left-nav',
  templateUrl: './left-nav.component.html',
  styleUrls: ['./left-nav.component.css']
})
export class LeftNavComponent implements OnInit {
  private currentMenuItem: LeftNavMenuItem;
  private currentSubMenuItem: LeftNavMenuItem;

  @Input() activeIcon: string;
  @Input() inActiveIcon: string;
  @Input() collapsed: boolean;
  @Input() menuItemList: Array<LeftNavMenuItem>;

  constructor() { }

  ngOnInit() {
    if (!this.menuItemList) {
      this.menuItemList = [];
    }
  }

  onLeftNavMenuItemClicked(menuItem: LeftNavMenuItem): void {
    if (this.collapsed) {
      // Do nothing when collapsed
      return;
    }

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
