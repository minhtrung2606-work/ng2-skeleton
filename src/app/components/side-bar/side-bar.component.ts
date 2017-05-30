import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SideBarMenuItem } from './side-bar-menu-item/model/side-bar-menu-item';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  private currentMenuItem: SideBarMenuItem;
  private currentSubMenuItem: SideBarMenuItem;

  private collapsed: boolean;
  private headerMenuItem: SideBarMenuItem;

  @Input() activeIcon: string;
  @Input() inActiveIcon: string;
  @Input() subMenuItemIcon: string;
  @Input() menuItemList: Array<SideBarMenuItem>;
  @Output() onMenuItemClicked: EventEmitter<SideBarMenuItem>;

  constructor() {
    this.onMenuItemClicked = new EventEmitter<SideBarMenuItem>();
    this.headerMenuItem = new SideBarMenuItem('Management Tool')
      .setIcon('fa-bars').setActive(true);
  }

  ngOnInit() {
    if (!this.menuItemList) {
      this.menuItemList = [];
    }
  }

  onMenuItemClicked(menuItem: SideBarMenuItem): void {
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

  onSubMenuItemClicked(subMenuItem: SideBarMenuItem): void {
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

  onMenuItemIconClicked(): void {
    this.collapsed = !this.collapsed;
  }

}
