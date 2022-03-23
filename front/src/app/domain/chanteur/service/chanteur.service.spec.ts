import { TestBed } from '@angular/core/testing';

import { ChanteurService } from './chanteur.service';

describe('ChanteurService', () => {
  let service: ChanteurService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChanteurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
