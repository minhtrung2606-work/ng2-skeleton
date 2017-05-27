import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftNavMenuItemComponent } from './left-nav-menu-item.component';

describe('LeftNavMenuItemComponent', () => {
  let component: LeftNavMenuItemComponent;
  let fixture: ComponentFixture<LeftNavMenuItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftNavMenuItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftNavMenuItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
