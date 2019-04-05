import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OursmoPage } from './oursmo.page';

describe('OursmoPage', () => {
  let component: OursmoPage;
  let fixture: ComponentFixture<OursmoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OursmoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OursmoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
