import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddExtraFoodComponent } from './add-extra-food.component';

describe('AddExtraFoodComponent', () => {
  let component: AddExtraFoodComponent;
  let fixture: ComponentFixture<AddExtraFoodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddExtraFoodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddExtraFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
