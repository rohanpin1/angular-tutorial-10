import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetsetinputfiieldvalueComponent } from './getsetinputfiieldvalue.component';

describe('GetsetinputfiieldvalueComponent', () => {
  let component: GetsetinputfiieldvalueComponent;
  let fixture: ComponentFixture<GetsetinputfiieldvalueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetsetinputfiieldvalueComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetsetinputfiieldvalueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
