import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormBasicComponent } from './reactive-form-basic.component';

describe('ReactiveFormBasicComponent', () => {
  let component: ReactiveFormBasicComponent;
  let fixture: ComponentFixture<ReactiveFormBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormBasicComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveFormBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
