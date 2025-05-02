import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { ColaboradorService } from '../services/colaborador.service';
import { CadastrarColaboradorComponent } from './cadastrar-colaborador.component';

describe('CadastrarColaboradorComponent', () => {
  let component: CadastrarColaboradorComponent;
  let fixture: ComponentFixture<CadastrarColaboradorComponent>;
  let colaboradorService: jasmine.SpyObj<ColaboradorService>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('ColaboradorService', ['cadastrarColaborador']);

    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [CadastrarColaboradorComponent],
      providers: [{ provide: ColaboradorService, useValue: spy }],
    });
    colaboradorService = TestBed.inject(ColaboradorService) as jasmine.SpyObj<ColaboradorService>;

    fixture = TestBed.createComponent(CadastrarColaboradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve chamar o serviço para cadastrar colaborador', () => {
    const novoColaborador = { nome: 'João', cpf: '12345678901' };
    colaboradorService.cadastrarColaborador.and.returnValue(of(novoColaborador));

    component.nome = 'João';
    component.cpf = '12345678901';
    component.cadastrar();

    expect(colaboradorService.cadastrarColaborador).toHaveBeenCalledWith(novoColaborador);
  });

  it('deve exibir mensagem de sucesso após cadastro', () => {
    const novoColaborador = { nome: 'João', cpf: '12345678901' };
    colaboradorService.cadastrarColaborador.and.returnValue(of(novoColaborador));

    component.nome = 'João';
    component.cpf = '12345678901';
    component.cadastrar();

    fixture.detectChanges();
    const mensagem = fixture.nativeElement.querySelector('.alert-success');
    expect(mensagem).toBeTruthy();
    expect(mensagem.textContent).toContain('Colaborador cadastrado com sucesso');
  });
});

