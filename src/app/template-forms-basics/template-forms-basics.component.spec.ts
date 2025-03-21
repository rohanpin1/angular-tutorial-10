import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateFormsBasicsComponent } from './template-forms-basics.component';

describe('TemplateFormsBasicsComponent', () => {
  let component: TemplateFormsBasicsComponent;
  let fixture: ComponentFixture<TemplateFormsBasicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateFormsBasicsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateFormsBasicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
