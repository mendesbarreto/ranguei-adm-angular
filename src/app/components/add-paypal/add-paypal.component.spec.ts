import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPaypalComponent } from './add-paypal.component';

describe('AddPaypalComponent', () => {
  let component: AddPaypalComponent;
  let fixture: ComponentFixture<AddPaypalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPaypalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPaypalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
