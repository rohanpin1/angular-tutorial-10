import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForloopcontrolComponent } from './forloopcontrol.component';

describe('ForloopcontrolComponent', () => {
  let component: ForloopcontrolComponent;
  let fixture: ComponentFixture<ForloopcontrolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForloopcontrolComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForloopcontrolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
