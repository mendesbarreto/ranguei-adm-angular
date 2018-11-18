import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableUpdateStatusComponent } from './table-update-status.component';

describe('TableUpdateStatusComponent', () => {
  let component: TableUpdateStatusComponent;
  let fixture: ComponentFixture<TableUpdateStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableUpdateStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableUpdateStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
