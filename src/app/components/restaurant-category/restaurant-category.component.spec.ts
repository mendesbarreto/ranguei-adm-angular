import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantCategoryComponent } from './restaurant-category.component';

describe('RestaurantCategoryComponent', () => {
  let component: RestaurantCategoryComponent;
  let fixture: ComponentFixture<RestaurantCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
