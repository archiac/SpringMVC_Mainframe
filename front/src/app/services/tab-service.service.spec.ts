import { TestBed } from '@angular/core/testing';

import { TabServiceService } from './tab-service.service';

describe('TabServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TabServiceService = TestBed.get(TabServiceService);
    expect(service).toBeTruthy();
  });
});
