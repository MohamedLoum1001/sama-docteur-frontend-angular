import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtlisateurServiceComponent } from './utlisateur-service.component';

describe('UtlisateurServiceComponent', () => {
  let component: UtlisateurServiceComponent;
  let fixture: ComponentFixture<UtlisateurServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UtlisateurServiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UtlisateurServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
