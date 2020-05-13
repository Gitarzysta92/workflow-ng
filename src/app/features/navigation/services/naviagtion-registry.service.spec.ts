import { TestBed } from '@angular/core/testing';

import { NaviagtionRegistryService } from './naviagtion-registry.service';

describe('NaviagtionRegistryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NaviagtionRegistryService = TestBed.get(NaviagtionRegistryService);
    expect(service).toBeTruthy();
  });
});
