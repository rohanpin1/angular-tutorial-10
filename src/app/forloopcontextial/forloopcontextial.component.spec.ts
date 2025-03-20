import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForloopcontextialComponent } from './forloopcontextial.component';

describe('ForloopcontextialComponent', () => {
  let component: ForloopcontextialComponent;
  let fixture: ComponentFixture<ForloopcontextialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForloopcontextialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForloopcontextialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
