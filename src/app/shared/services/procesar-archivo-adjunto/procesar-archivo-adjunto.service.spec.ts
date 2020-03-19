import { TestBed } from '@angular/core/testing';

import { ProcesarArchivoAdjuntoService } from './procesar-archivo-adjunto.service';

describe('ProcesarArchivoAdjuntoService', () => {
  let service: ProcesarArchivoAdjuntoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProcesarArchivoAdjuntoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
