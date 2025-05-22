import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvisEvaluationComponent } from './avis-evaluation.component';

describe('AvisEvaluationComponent', () => {
  let component: AvisEvaluationComponent;
  let fixture: ComponentFixture<AvisEvaluationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvisEvaluationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvisEvaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
