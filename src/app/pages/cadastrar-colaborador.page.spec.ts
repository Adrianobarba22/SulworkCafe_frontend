import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarColaboradorPage } from './cadastrar-colaborador.page';

describe('CadastrarColaboradorPage', () => {
  let component: CadastrarColaboradorPage;
  let fixture: ComponentFixture<CadastrarColaboradorPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastrarColaboradorPage]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CadastrarColaboradorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
