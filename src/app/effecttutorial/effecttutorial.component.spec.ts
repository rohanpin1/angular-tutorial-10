import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EffecttutorialComponent } from './effecttutorial.component';

describe('EffecttutorialComponent', () => {
  let component: EffecttutorialComponent;
  let fixture: ComponentFixture<EffecttutorialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EffecttutorialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EffecttutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
