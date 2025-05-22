import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationMedecinsComponent } from './validation-medecins.component';

describe('ValidationMedecinsComponent', () => {
  let component: ValidationMedecinsComponent;
  let fixture: ComponentFixture<ValidationMedecinsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValidationMedecinsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValidationMedecinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
