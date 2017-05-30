import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './side-bar.component';
import { SideBarMenuItemComponent } from './side-bar-menu-item/side-bar-menu-item.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SideBarComponent, SideBarMenuItemComponent]
})
export class SideBarModule { }
