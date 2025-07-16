import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTurnComponent } from './all-turn.component';

describe('AllTurnComponent', () => {
  let component: AllTurnComponent;
  let fixture: ComponentFixture<AllTurnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllTurnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllTurnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
