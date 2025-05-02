import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { ColaboradorService } from '../services/colaborador.service';
import { ListarColaboradoresComponent } from './listar-colaboradores.component';

describe('ListarColaboradoresComponent', () => {
  let component: ListarColaboradoresComponent;
  let fixture: ComponentFixture<ListarColaboradoresComponent>;
  let colaboradorService: jasmine.SpyObj<ColaboradorService>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('ColaboradorService', ['getColaboradores']);

    TestBed.configureTestingModule({
      declarations: [ListarColaboradoresComponent],
      providers: [{ provide: ColaboradorService, useValue: spy }],
    });
    colaboradorService = TestBed.inject(ColaboradorService) as jasmine.SpyObj<ColaboradorService>;

    fixture = TestBed.createComponent(ListarColaboradoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve exibir a lista de colaboradores', () => {
    const mockColaboradores = [
      { id: 1, nome: 'João' },
      { id: 2, nome: 'Maria' }
    ];
    colaboradorService.getColaboradores.and.returnValue(of(mockColaboradores));

    component.ngOnInit();
    fixture.detectChanges();

    const elementos = fixture.nativeElement.querySelectorAll('.colaborador-item');
    expect(elementos.length).toBe(2);
    expect(elementos[0].textContent).toContain('João');
    expect(elementos[1].textContent).toContain('Maria');
  });
});

