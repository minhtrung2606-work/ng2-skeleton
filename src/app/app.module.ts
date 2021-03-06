import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';

import { SideBarModule } from './components/side-bar/side-bar.module';
import { DropdownLinkModule } from './components/dropdown-link/dropdown-link.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),

    SideBarModule,
    DropdownLinkModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
