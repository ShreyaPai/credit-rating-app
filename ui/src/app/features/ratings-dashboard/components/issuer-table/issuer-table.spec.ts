import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssuerTable } from './issuer-table';

describe('IssuerTable', () => {
  let component: IssuerTable;
  let fixture: ComponentFixture<IssuerTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IssuerTable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IssuerTable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
