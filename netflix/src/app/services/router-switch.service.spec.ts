import { TestBed } from '@angular/core/testing';

import { RouterSwitchService } from './router-switch.service';

describe('RouterSwitchService', () => {
  let service: RouterSwitchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RouterSwitchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
