import { TestBed } from '@angular/core/testing';

import { SharedRegistryService } from './shared-registry.service';

describe('SharedRegistryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SharedRegistryService = TestBed.get(SharedRegistryService);
    expect(service).toBeTruthy();
  });
});
