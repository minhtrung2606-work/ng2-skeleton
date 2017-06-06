import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { SideBarMenuItem } from './side-bar-menu-item/model/side-bar-menu-item';
import { FormControl } from '@angular/forms';
import * as _ from 'lodash';

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
  private inSearch: boolean;

  @Input() activeIcon: string;
  @Input() inActiveIcon: string;
  @Input() subMenuItemIcon: string;
  @Input() menuItemList: Array<SideBarMenuItem>;
  @Output() onMenuItemClicked: EventEmitter<SideBarMenuItem>;

  constructor() {
    this.onMenuItemClicked = new EventEmitter<SideBarMenuItem>();
    this.headerMenuItem = new SideBarMenuItem('Management Tool')
      .setIcon('fa-bars').setActive(true);
    this.searchMenuItem = new SideBarMenuItem('Results').setActive(true);
    this.searchControl = new FormControl('');
    this.inSearch = false;
  }

  isInSearch(): boolean {
    return this.inSearch;
  }

  getMenuItemList(): Array<SideBarMenuItem> {
    if (this.inSearch) {
      return [this.searchMenuItem];
    } else {
      return this.menuItemList;
    }
  }

  stopSearching(): void {
    // This function only sets the value of search input control to empty
    // All remaining things will be done with onSearchStrChanged
    this.searchControl.setValue('');
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
    this.inSearch = !!value;
    if (value) {
      this.searchMenuItem
        .setLabel('Results')
        .setActive(true)
        .emptySubMenuItem()
      ;

      _.each(this.menuItemList, (menuItem: SideBarMenuItem) => {
        _.each(menuItem.getSubMenuItemList(), (subMenuItem: SideBarMenuItem) => {
          if (subMenuItem.getLabel().toUpperCase().indexOf(value.toUpperCase()) > -1) {
            this.searchMenuItem.addSubMenuItem(subMenuItem);
          }
        });
      });

      this.searchMenuItem
        .setLabel([
          this.searchMenuItem.getSubMenuItemList().length,
          ' ',
          'Results'].join(''))
      ;
    }
  }

}
