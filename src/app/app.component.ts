import { Component } from '@angular/core';

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
