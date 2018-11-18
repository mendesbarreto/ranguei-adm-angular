import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditExtraFoodComponent } from './edit-extra-food.component';

describe('EditExtraFoodComponent', () => {
  let component: EditExtraFoodComponent;
  let fixture: ComponentFixture<EditExtraFoodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditExtraFoodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditExtraFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
