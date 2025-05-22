import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionPlanningsComponent } from './gestion-plannings.component';

describe('GestionPlanningsComponent', () => {
  let component: GestionPlanningsComponent;
  let fixture: ComponentFixture<GestionPlanningsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionPlanningsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionPlanningsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
