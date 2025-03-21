import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormGroupingReactiveFormComponent } from './form-grouping-reactive-form.component';

describe('FormGroupingReactiveFormComponent', () => {
  let component: FormGroupingReactiveFormComponent;
  let fixture: ComponentFixture<FormGroupingReactiveFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormGroupingReactiveFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormGroupingReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
