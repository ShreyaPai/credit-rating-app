import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingsDashboard } from './ratings-dashboard';

describe('RatingsDashboard', () => {
  let component: RatingsDashboard;
  let fixture: ComponentFixture<RatingsDashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RatingsDashboard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RatingsDashboard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
