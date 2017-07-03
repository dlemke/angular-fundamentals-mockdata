import { TestBed, inject } from '@angular/core/testing';

import { ListResolverService } from './list-resolver.service';

describe('ListResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListResolverService]
    });
  });

  it('should be created', inject([ListResolverService], (service: ListResolverService) => {
    expect(service).toBeTruthy();
  }));
});
