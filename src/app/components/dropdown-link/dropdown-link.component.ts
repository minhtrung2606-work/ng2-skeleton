import { Component, OnInit, Input } from '@angular/core';
import { DropdownLinkItem } from './model/dropdown-link-item';

@Component({
  selector: 'dropdown-link',
  templateUrl: './dropdown-link.component.html',
  styleUrls: ['./dropdown-link.component.css']
})
export class DropdownLinkComponent implements OnInit {
  @Input() id: string;
  @Input() label: string;
  @Input() helperCssClass: string;
  @Input() menuItemList: Array<DropdownLinkItem>;

  constructor() {
  }

  ngOnInit() {
  }

  getId(): string {
    return this.id;
  }

  getLabel(): string {
    return this.label;
  }

  getMenuItemList(): Array<DropdownLinkItem> {
    return this.menuItemList;
  }

  isMenuItemListEmpty(): boolean {
    return !this.menuItemList || this.menuItemList.length === 0;
  }

}
