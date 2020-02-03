import { TestBed } from '@angular/core/testing';

import { OutletsRegistryService } from './outlets-registry.service';

describe('OutletsRegistryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OutletsRegistryService = TestBed.get(OutletsRegistryService);
    expect(service).toBeTruthy();
  });
});
