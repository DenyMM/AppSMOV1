import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymPage } from './paym.page';

describe('PaymPage', () => {
  let component: PaymPage;
  let fixture: ComponentFixture<PaymPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
