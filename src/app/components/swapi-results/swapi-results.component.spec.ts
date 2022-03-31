import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwapiResultsComponent } from './swapi-results.component';

describe('SwapiResultsComponent', () => {
  let component: SwapiResultsComponent;
  let fixture: ComponentFixture<SwapiResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwapiResultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwapiResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
