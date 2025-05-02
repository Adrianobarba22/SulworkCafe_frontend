import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { ColaboradorService } from './colaborador.service';

describe('ColaboradorService', () => {
  let service: ColaboradorService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ColaboradorService],
    });
    service = TestBed.inject(ColaboradorService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('deve retornar a lista de colaboradores', () => {
    const mockColaboradores = [
      { id: 1, nome: 'João' },
      { id: 2, nome: 'Maria' }
    ];

    service.getColaboradores().subscribe((colaboradores) => {
      expect(colaboradores.length).toBe(2);
      expect(colaboradores[0].nome).toBe('João');
      expect(colaboradores[1].nome).toBe('Maria');
    });

    const req = httpMock.expectOne('/api/colaboradores');
    expect(req.request.method).toBe('GET');
    req.flush(mockColaboradores);
  });

  it('deve cadastrar um colaborador', () => {
    const novoColaborador = { nome: 'Carlos', cpf: '12345678900' };

    service.cadastrarColaborador(novoColaborador).subscribe((colaborador) => {
      expect(colaborador.nome).toBe('Carlos');
    });

    const req = httpMock.expectOne('/api/colaboradores');
    expect(req.request.method).toBe('POST');
    req.flush({ nome: 'Carlos', cpf: '12345678900' });
  });

  afterEach(() => {
    httpMock.verify();
  });
});
