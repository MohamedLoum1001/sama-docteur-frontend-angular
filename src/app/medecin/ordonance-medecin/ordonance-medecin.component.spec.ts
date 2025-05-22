import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdonanceMedecinComponent } from './ordonance-medecin.component';

describe('OrdonanceMedecinComponent', () => {
  let component: OrdonanceMedecinComponent;
  let fixture: ComponentFixture<OrdonanceMedecinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrdonanceMedecinComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdonanceMedecinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
