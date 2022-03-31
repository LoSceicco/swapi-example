import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwapiFormComponent } from './swapi-form.component';

describe('SwapiFormComponent', () => {
  let component: SwapiFormComponent;
  let fixture: ComponentFixture<SwapiFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwapiFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwapiFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
