import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreapubPage } from './areapub.page';

describe('AreapubPage', () => {
  let component: AreapubPage;
  let fixture: ComponentFixture<AreapubPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreapubPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreapubPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
