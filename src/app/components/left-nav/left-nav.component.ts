import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LeftNavMenuItem } from './left-nav-menu-item/model/left-nav-menu-item';

@Component({
  selector: 'left-nav',
  templateUrl: './left-nav.component.html',
  styleUrls: ['./left-nav.component.css']
})
export class LeftNavComponent implements OnInit {
  private currentMenuItem: LeftNavMenuItem;
  private currentSubMenuItem: LeftNavMenuItem;

  private collapsed: boolean;
  private headerMenuItem: LeftNavMenuItem;

  @Input() activeIcon: string;
  @Input() inActiveIcon: string;
  @Input() subMenuItemIcon: string;
  @Input() menuItemList: Array<LeftNavMenuItem>;
  @Output() onMenuItemClicked: EventEmitter<LeftNavMenuItem>;

  constructor() {
    this.onMenuItemClicked = new EventEmitter<LeftNavMenuItem>();
    this.headerMenuItem = new LeftNavMenuItem('Management Tool').setStartIcon('fa-bars').setActive(true);
  }

  ngOnInit() {
    if (!this.menuItemList) {
      this.menuItemList = [];
    }
  }

  onLeftNavMenuItemClicked(menuItem: LeftNavMenuItem): void {
    if (this.collapsed) {
      // Do nothing when collapsed
      this.onMenuItemClicked.emit(menuItem);
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

  onHeaderLeftNavMenuItemClicked(): void {
    this.collapsed = !this.collapsed;
  }

}
