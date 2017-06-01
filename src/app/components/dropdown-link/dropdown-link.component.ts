import { Component, OnInit } from '@angular/core';
import { DropdownLinkItem } from './model/dropdown-link-item';

@Component({
  selector: 'dropdown-link',
  templateUrl: './dropdown-link.component.html',
  styleUrls: ['./dropdown-link.component.css']
})
export class DropdownLinkComponent implements OnInit {
  private label: string;
  private menuItemList: Array<DropdownLinkItem>;

  constructor() {
    this.label = 'abc@example.com.vn';
    this.menuItemList = [];
  }

  ngOnInit() {
    this.menuItemList.push(new DropdownLinkItem('Menu Item 1'));
  }

  getLabel(): string {
    return this.label;
  }

  getMenuItemList(): Array<DropdownLinkItem> {
    return this.menuItemList;
  }

}
