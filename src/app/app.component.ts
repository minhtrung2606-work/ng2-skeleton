import { Component } from '@angular/core';
import {
  SideBarMenuItem
} from './components/side-bar/side-bar-menu-item/model/side-bar-menu-item';
import * as _ from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private sideBarItemList: Array<SideBarMenuItem>;
  private collapsed: boolean;

  constructor() {
    let productCategory = getElectronicProductsCategory();
    this.sideBarItemList = buildsideBarItemList(productCategory);

    this.collapsed = true;
  }

  onBarsIconClicked(): void {
    // Toggle show/hide left nav
    this.collapsed = !this.collapsed;
  }

  onMenuItemClicked(): void {
    if (this.collapsed) {
      this.collapsed = false;
    } else {
      // Nothing needs to be done now
    }
  }
}

function buildsideBarItemList(productCategory) {
  if (productCategory) {
    return _.map(productCategory, function (productCat) {
      var menuItem = new SideBarMenuItem(productCat.label);

      _.each(productCat.itemList, function (prod) {
        let subMenuItem = new SideBarMenuItem(prod.label);
        subMenuItem.setCount(prod.count);

        menuItem.addSubMenuItem(subMenuItem);
      });

      return menuItem;
    })
  } else {
    return [];
  }
}

function getElectronicProductsCategory() {
  return [
    { icon: 'fa-laptop', label: 'Laptop',
      itemList: [
        { label: 'MAC', count: 12 },
        { label: 'Dell', count: 7 },
        { label: 'Asus', count: 6 },
        { label: 'Others', count: 2 }
      ]},
    { icon: 'fa-tablet', label: 'Table',
      itemList: [
        { label: 'iPad', count: 7 },
        { label: 'Samsung', count: 1 },
        { label: 'Others', count: 4 },
      ]}
  ];
}
