import { TestBed, inject } from '@angular/core/testing';

import { CisSettingsService } from './cis-settings.service';

describe('CisSettingsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CisSettingsService]
    });
  });

  it('should be created', inject([CisSettingsService], (service: CisSettingsService) => {
    expect(service).toBeTruthy();
  }));
});
