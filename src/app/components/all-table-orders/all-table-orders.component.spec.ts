import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTableOrdersComponent } from './all-table-orders.component';

describe('AllTableOrdersComponent', () => {
  let component: AllTableOrdersComponent;
  let fixture: ComponentFixture<AllTableOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllTableOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllTableOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
