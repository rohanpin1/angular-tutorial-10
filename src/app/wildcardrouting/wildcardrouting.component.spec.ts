import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WildcardroutingComponent } from './wildcardrouting.component';

describe('WildcardroutingComponent', () => {
  let component: WildcardroutingComponent;
  let fixture: ComponentFixture<WildcardroutingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WildcardroutingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WildcardroutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
