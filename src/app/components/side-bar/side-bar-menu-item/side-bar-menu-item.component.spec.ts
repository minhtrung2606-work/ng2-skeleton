import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBarMenuItemComponent } from './side-bar-menu-item.component';

describe('SideBarMenuItemComponent', () => {
  let component: SideBarMenuItemComponent;
  let fixture: ComponentFixture<SideBarMenuItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideBarMenuItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideBarMenuItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
