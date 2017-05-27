import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeftNavComponent } from './left-nav.component';
import { LeftNavMenuItemComponent } from './left-nav-menu-item/left-nav-menu-item.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LeftNavComponent, LeftNavMenuItemComponent],
  exports: [LeftNavComponent]
})
export class LeftNavModule { }
