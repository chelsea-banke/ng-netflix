import { TestBed } from '@angular/core/testing';

import { QAsService } from './qas.service';

describe('QAsService', () => {
  let service: QAsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QAsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
