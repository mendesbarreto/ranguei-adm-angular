import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableOrderDetailComponent } from './table-order-detail.component';

describe('TableOrderDetailComponent', () => {
  let component: TableOrderDetailComponent;
  let fixture: ComponentFixture<TableOrderDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableOrderDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableOrderDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
