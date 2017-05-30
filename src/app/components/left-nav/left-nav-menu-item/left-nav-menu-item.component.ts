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
  @Input() subMenuItemIcon: string;
  @Input() collapsed: boolean;

  @Output() onMenuItemClicked: EventEmitter<LeftNavMenuItem>;
  @Output() onSubMenuItemClicked: EventEmitter<LeftNavMenuItem>;
  @Output() onMenuItemStartIconClicked: EventEmitter<LeftNavMenuItem>;

  constructor() {
    this.onMenuItemClicked = new EventEmitter();
    this.onSubMenuItemClicked = new EventEmitter();
    this.onMenuItemStartIconClicked = new EventEmitter();
  }

  ngOnInit() {
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

  onPrimaryItemStartIconClicked(menuItem: LeftNavMenuItem): void {
    this.onMenuItemStartIconClicked.emit(menuItem);
  }

}
