import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleTimerComponent } from './single-timer.component';

describe('SingleTimerComponent', () => {
  let component: SingleTimerComponent;
  let fixture: ComponentFixture<SingleTimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SingleTimerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SingleTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
