import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditStreetComponent } from './edit-street.component';

describe('EditStreetComponent', () => {
  let component: EditStreetComponent;
  let fixture: ComponentFixture<EditStreetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditStreetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditStreetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
