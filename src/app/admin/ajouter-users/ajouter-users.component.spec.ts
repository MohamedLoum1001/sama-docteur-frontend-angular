import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterUsersComponent } from './ajouter-users.component';

describe('AjouterUsersComponent', () => {
  let component: AjouterUsersComponent;
  let fixture: ComponentFixture<AjouterUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AjouterUsersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
