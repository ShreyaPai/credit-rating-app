import { TestBed } from '@angular/core/testing';

import { Issuer } from './issuer';

describe('Issuer', () => {
  let service: Issuer;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Issuer);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
