import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElseifcontrolComponent } from './elseifcontrol.component';

describe('ElseifcontrolComponent', () => {
  let component: ElseifcontrolComponent;
  let fixture: ComponentFixture<ElseifcontrolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElseifcontrolComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElseifcontrolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
