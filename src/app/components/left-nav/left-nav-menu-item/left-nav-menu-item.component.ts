import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LeftNavMenuItem } from './model/left-nav-menu-item';

@Component({
  selector: 'left-nav-menu-item',
  templateUrl: './left-nav-menu-item.component.html',
  styleUrls: ['./left-nav-menu-item.component.css']
})
export class LeftNavMenuItemComponent implements OnInit {
  @Input() menuItem: LeftNavMenuItem;
  @Input() activeIcon: string;
  @Input() inActiveIcon: string;
  @Input() collapsed: boolean;

  @Output() onMenuItemClicked: EventEmitter<LeftNavMenuItem>;
  @Output() onSubMenuItemClicked: EventEmitter<LeftNavMenuItem>;

  constructor() {
    this.onMenuItemClicked = new EventEmitter();
    this.onSubMenuItemClicked = new EventEmitter();
  }

  ngOnInit() {
    if (!this.activeIcon) {
      this.activeIcon = 'fa-angle-down';
    }
    if (!this.inActiveIcon) {
      this.inActiveIcon = 'fa-angle-right';
    }
  }

  onPrimaryItemClicked(menuItem: LeftNavMenuItem): void {
    this.onMenuItemClicked.emit(menuItem);
  }

  onSecondaryItemClicked(subMenuItem: LeftNavMenuItem): void {
    this.onSubMenuItemClicked.emit(subMenuItem);
  }

  getPrimaryItemEndIcon(): string {
    if (this.menuItem.isActive()) {
      return this.activeIcon;
    } else {
      return this.inActiveIcon;
    }
  }

}
