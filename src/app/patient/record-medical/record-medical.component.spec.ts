import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordMedicalComponent } from './record-medical.component';

describe('RecordMedicalComponent', () => {
  let component: RecordMedicalComponent;
  let fixture: ComponentFixture<RecordMedicalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecordMedicalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecordMedicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
