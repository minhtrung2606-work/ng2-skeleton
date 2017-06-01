import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownLinkComponent } from './dropdown-link.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    NgbModule
  ],
  declarations: [DropdownLinkComponent],
  exports: [DropdownLinkComponent]
})
export class DropdownLinkModule { }
