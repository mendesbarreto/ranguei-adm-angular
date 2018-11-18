import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDistrictComponent } from './add-district.component';

describe('AddDistrictComponent', () => {
  let component: AddDistrictComponent;
  let fixture: ComponentFixture<AddDistrictComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDistrictComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDistrictComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
