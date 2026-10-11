import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssuerDetails } from './issuer-details';

describe('IssuerDetails', () => {
  let component: IssuerDetails;
  let fixture: ComponentFixture<IssuerDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IssuerDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IssuerDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
