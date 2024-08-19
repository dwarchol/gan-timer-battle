import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrambleViewComponent } from './scramble-view.component';

describe('ScrambleViewComponent', () => {
  let component: ScrambleViewComponent;
  let fixture: ComponentFixture<ScrambleViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScrambleViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScrambleViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
