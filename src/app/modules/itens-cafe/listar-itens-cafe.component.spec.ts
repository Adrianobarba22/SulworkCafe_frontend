import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { ItemCafe } from '../../models/item-cafe.model';
import { ItemCafeService } from '../../services/item-cafe.service';
import { ListarItensCafeComponent } from './listar-itens-cafe.component';

describe('ListarItensCafeComponent', () => {
  let component: ListarItensCafeComponent;
  let fixture: ComponentFixture<ListarItensCafeComponent>;
  let mockService: jasmine.SpyObj<ItemCafeService>;

  const mockItens: ItemCafe[] = [
    {
      id: 1,
      nomeColaborador: 'João',
      cpf: '12345678901',
      item: 'Pão',
      data: new Date().toISOString().split('T')[0],
      entregue: false
    },
    {
      id: 2,
      nomeColaborador: 'Maria',
      cpf: '98765432100',
      item: 'Bolo',
      data: '2099-12-31',
      entregue: false
    }
  ];

  beforeEach(async () => {
    const serviceSpy = jasmine.createSpyObj('ItemCafeService', ['listarTodos', 'atualizar']);

    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, ListarItensCafeComponent],
      providers: [{ provide: ItemCafeService, useValue: serviceSpy }],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();

    mockService = TestBed.inject(ItemCafeService) as jasmine.SpyObj<ItemCafeService>;
    mockService.listarTodos.and.returnValue(of(mockItens));
    mockService.atualizar.and.returnValue(of(mockItens[0]));

    fixture = TestBed.createComponent(ListarItensCafeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve criar o componente', () => {
    expect(component).toBeTruthy();
  });

  it('deve carregar os itens do serviço na inicialização', () => {
    expect(component.itens.length).toBe(2);
    expect(component.itens[0].nomeColaborador).toBe('João');
  });

  it('deve permitir marcar como entregue se a data for hoje ou antes', () => {
    const item = mockItens[0];
    expect(component.isHojeOuAntes(item.data)).toBeTrue();

    component.marcarEntregue(item);
    expect(item.entregue).toBeTrue();
    expect(mockService.atualizar).toHaveBeenCalledWith(item);
  });

  it('não deve marcar como entregue se a data for futura', () => {
    const item = mockItens[1];
    expect(component.isHojeOuAntes(item.data)).toBeFalse();

    component.marcarEntregue(item);
    expect(item.entregue).toBeFalse(); // não deve alterar
    expect(mockService.atualizar).not.toHaveBeenCalledWith(item);
  });
});
