import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarItensCafePage } from './listar-itens-cafe.page';

describe('ListarItensCafePage', () => {
  let component: ListarItensCafePage;
  let fixture: ComponentFixture<ListarItensCafePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarItensCafePage]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListarItensCafePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
