import { Component, OnInit, Input, Output, EventEmitter, HostBinding } from '@angular/core';
import { SideBarMenuItem } from './model/side-bar-menu-item';

@Component({
  selector: 'side-bar-menu-item',
  templateUrl: './side-bar-menu-item.component.html',
  styleUrls: ['./side-bar-menu-item.component.css']
})
export class SideBarMenuItemComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'side-bar-menu-item';

  @Input() menuItem: SideBarMenuItem;
  @Input() activeIcon: string;
  @Input() inActiveIcon: string;
  @Input() subMenuItemIcon: string;
  @Input() collapsed: boolean;

  @Output() onMenuItemClicked: EventEmitter<SideBarMenuItem>;
  @Output() onSubMenuItemClicked: EventEmitter<SideBarMenuItem>;
  @Output() onMenuItemIconClicked: EventEmitter<SideBarMenuItem>;

  constructor() {
    this.onMenuItemClicked = new EventEmitter();
    this.onSubMenuItemClicked = new EventEmitter();
    this.onMenuItemIconClicked = new EventEmitter();
  }

  ngOnInit() {
  }

  onPrimaryItemClicked(menuItem: SideBarMenuItem): void {
    if (!this.collapsed) {
      this.onMenuItemClicked.emit(menuItem);
    }
  }

  onSecondaryItemClicked(subMenuItem: SideBarMenuItem): void {
    this.onSubMenuItemClicked.emit(subMenuItem);
  }

  getActiveIcon(): string {
    if (this.menuItem.isActive()) {
      return this.activeIcon;
    } else {
      return this.inActiveIcon;
    }
  }

  onPrimaryItemIconClicked(menuItem: SideBarMenuItem): void {
    this.onMenuItemIconClicked.emit(menuItem);
  }

}
