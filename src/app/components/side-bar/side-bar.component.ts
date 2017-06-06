import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { SideBarMenuItem } from './side-bar-menu-item/model/side-bar-menu-item';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit, OnDestroy {
  private currentMenuItem: SideBarMenuItem;
  private currentSubMenuItem: SideBarMenuItem;

  private collapsed: boolean;
  private headerMenuItem: SideBarMenuItem;
  private searchMenuItem: SideBarMenuItem;
  private searchControl: FormControl;
  private searchValueChangesUnSubscribe: any;
  private menuItemListBk: Array<SideBarMenuItem>;

  @Input() activeIcon: string;
  @Input() inActiveIcon: string;
  @Input() subMenuItemIcon: string;
  @Input() menuItemList: Array<SideBarMenuItem>;
  @Output() onMenuItemClicked: EventEmitter<SideBarMenuItem>;

  constructor() {
    this.onMenuItemClicked = new EventEmitter<SideBarMenuItem>();
    this.headerMenuItem = new SideBarMenuItem('Management Tool')
      .setIcon('fa-bars').setActive(true);
    this.searchMenuItem = new SideBarMenuItem('').setIcon('fa-search');
    this.searchControl = new FormControl('test');
  }

  getMenuItemList(): Array<SideBarMenuItem> {
    return this.menuItemList;
  }

  ngOnInit() {
    if (!this.menuItemList) {
      this.menuItemList = [];
    }

    this.searchValueChangesUnSubscribe = this.searchControl.valueChanges.subscribe((value) => {
      this.onSearchStrChanged(value);
    });
  }

  ngOnDestroy() {
    this.searchValueChangesUnSubscribe();
  }

  onSideBarMenuItemClicked(menuItem: SideBarMenuItem): void {
    if (this.collapsed) {
      // Do nothing when collapsed
      this.onMenuItemClicked.emit(menuItem);
      return;
    }

    if (this.headerMenuItem.equals(menuItem)) {
      // Do nothing when clicking on header menu item
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

  onSideBarSubMenuItemClicked(subMenuItem: SideBarMenuItem): void {
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

  onSideBarMenuItemIconClicked(menuItem: SideBarMenuItem): void {
    if (this.collapsed) {
      // If side bar was already collapsed, then expand it
      this.collapsed = false;

      // This is a hack to retain the active value of the menu item.
      // It's because onSideBarMenuItemClicked will be called right after this method completely finishes
      //   and that will change the active value of the menu item
      this.onSideBarMenuItemClicked(menuItem);
    } else if (this.headerMenuItem.equals(menuItem)) {
      // Toggle it
      this.collapsed = !this.collapsed;
    }
  }

  private onSearchStrChanged(value) {
    if (value) {
      this.menuItemListBk = this.menuItemList.concat();
    }
  }

}
