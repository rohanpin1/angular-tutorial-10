import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalsdatatypesComponent } from './signalsdatatypes.component';

describe('SignalsdatatypesComponent', () => {
  let component: SignalsdatatypesComponent;
  let fixture: ComponentFixture<SignalsdatatypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalsdatatypesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalsdatatypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
