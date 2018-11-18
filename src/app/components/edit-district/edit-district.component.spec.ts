import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDistrictComponent } from './edit-district.component';

describe('EditDistrictComponent', () => {
  let component: EditDistrictComponent;
  let fixture: ComponentFixture<EditDistrictComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDistrictComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDistrictComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
