import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './side-bar.component';
import { SideBarMenuItemComponent } from './side-bar-menu-item/side-bar-menu-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [SideBarComponent, SideBarMenuItemComponent],
  exports: [SideBarComponent, SideBarMenuItemComponent]
})
export class SideBarModule { }
