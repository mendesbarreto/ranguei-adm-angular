import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewExtraFoodComponent } from './view-extra-food.component';

describe('ViewExtraFoodComponent', () => {
  let component: ViewExtraFoodComponent;
  let fixture: ComponentFixture<ViewExtraFoodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewExtraFoodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewExtraFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
