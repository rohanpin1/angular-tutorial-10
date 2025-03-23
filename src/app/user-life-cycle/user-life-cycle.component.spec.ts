import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLifeCycleComponent } from './user-life-cycle.component';

describe('UserLifeCycleComponent', () => {
  let component: UserLifeCycleComponent;
  let fixture: ComponentFixture<UserLifeCycleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserLifeCycleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserLifeCycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
