import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewDistrictComponent } from './add-new-district.component';

describe('AddNewDistrictComponent', () => {
  let component: AddNewDistrictComponent;
  let fixture: ComponentFixture<AddNewDistrictComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewDistrictComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewDistrictComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
