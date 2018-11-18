import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewStreetComponent } from './add-new-street.component';

describe('AddNewStreetComponent', () => {
  let component: AddNewStreetComponent;
  let fixture: ComponentFixture<AddNewStreetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewStreetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewStreetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
