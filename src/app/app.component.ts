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
  private leftNavItemList;

  constructor() {
    let productCategory = getElectronicProductsCategory();
    this.leftNavItemList = buildLeftNavItemList(productCategory);
  }
}

function buildLeftNavItemList(productCategory) {
  if (productCategory) {
    return _.map(productCategory, function (productCat) {
      var menuItem = new LeftNavMenuItem(productCat.label);
      menuItem
        .setStartIcon(productCat.icon)
        .setStatistic(true)
        .setCount(productCat.count)
      ;

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
    { icon: 'fa-laptop', label: 'Laptop', count: 27,
      itemList: [
        { label: 'MAC', count: 12 },
        { label: 'Dell', count: 7 },
        { label: 'Asus', count: 6 },
        { label: 'Asus', count: 2 }
      ]}
  ];
}
