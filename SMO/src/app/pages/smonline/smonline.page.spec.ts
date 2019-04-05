import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmonlinePage } from './smonline.page';

describe('SmonlinePage', () => {
  let component: SmonlinePage;
  let fixture: ComponentFixture<SmonlinePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmonlinePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmonlinePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
