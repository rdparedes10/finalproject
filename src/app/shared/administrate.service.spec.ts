import { TestBed, inject } from '@angular/core/testing';

import { AdministrateService } from './administrate.service';

describe('AdministrateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdministrateService]
    });
  });

  it('should be created', inject([AdministrateService], (service: AdministrateService) => {
    expect(service).toBeTruthy();
  }));
});
