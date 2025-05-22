import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionStatistiquesComponent } from './gestion-statistiques.component';

describe('GestionStatistiquesComponent', () => {
  let component: GestionStatistiquesComponent;
  let fixture: ComponentFixture<GestionStatistiquesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionStatistiquesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionStatistiquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
