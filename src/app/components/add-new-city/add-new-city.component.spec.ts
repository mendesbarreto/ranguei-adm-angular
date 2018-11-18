import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewCityComponent } from './add-new-city.component';

describe('AddNewCityComponent', () => {
  let component: AddNewCityComponent;
  let fixture: ComponentFixture<AddNewCityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewCityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
