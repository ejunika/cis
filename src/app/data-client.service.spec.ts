import { TestBed, inject } from '@angular/core/testing';

import { DataClientService } from './data-client.service';

describe('DataClientService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataClientService]
    });
  });

  it('should be created', inject([DataClientService], (service: DataClientService) => {
    expect(service).toBeTruthy();
  }));
});
