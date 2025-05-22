import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionSpecialitesComponent } from './gestion-specialites.component';

describe('GestionSpecialitesComponent', () => {
  let component: GestionSpecialitesComponent;
  let fixture: ComponentFixture<GestionSpecialitesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionSpecialitesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionSpecialitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
