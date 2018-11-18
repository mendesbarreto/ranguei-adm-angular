import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CityConfigurationComponent } from './city-configuration.component';

describe('CityConfigurationComponent', () => {
  let component: CityConfigurationComponent;
  let fixture: ComponentFixture<CityConfigurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CityConfigurationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
