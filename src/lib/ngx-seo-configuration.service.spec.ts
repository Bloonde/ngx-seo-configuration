import { TestBed } from '@angular/core/testing';

import { NgxSeoConfigurationService } from './ngx-seo-configuration.service';

describe('NgxSeoConfigurationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxSeoConfigurationService = TestBed.get(NgxSeoConfigurationService);
    expect(service).toBeTruthy();
  });
});
