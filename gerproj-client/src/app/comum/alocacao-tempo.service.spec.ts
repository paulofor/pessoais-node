import { TestBed, inject } from '@angular/core/testing';

import { AlocacaoTempoService } from './alocacao-tempo.service';

describe('AlocacaoTempoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlocacaoTempoService]
    });
  });

  it('should be created', inject([AlocacaoTempoService], (service: AlocacaoTempoService) => {
    expect(service).toBeTruthy();
  }));
});
