import { Component } from '@angular/core';
import {
  LeftNavMenuItem
} from './components/left-nav/left-nav-menu-item/model/left-nav-menu-item';
import * as _ from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private leftNavItemList: Array<LeftNavMenuItem>;
  private activeIcon: string;
  private inActiveIcon: string;

  constructor() {
    let productCategory = getElectronicProductsCategory();
    this.leftNavItemList = buildLeftNavItemList(productCategory);
    this.activeIcon = 'fa-caret-down';
    this.inActiveIcon = 'fa-caret-right';
    this.inActiveIcon = 'fa-caret-right';
  }
}

function buildLeftNavItemList(productCategory) {
  if (productCategory) {
    return _.map(productCategory, function (productCat) {
      var menuItem = new LeftNavMenuItem(productCat.label);
      menuItem.setStartIcon(productCat.icon);

      _.each(productCat.itemList, function (prod) {
        let subMenuItem = new LeftNavMenuItem(prod.label);
        subMenuItem
          .setStatistic(true)
          .setCount(prod.count)
        ;

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
