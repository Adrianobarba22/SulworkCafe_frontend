import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarItemCafePage } from './cadastrar-item-cafe.page';

describe('CadastrarItemCafePage', () => {
  let component: CadastrarItemCafePage;
  let fixture: ComponentFixture<CadastrarItemCafePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastrarItemCafePage]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CadastrarItemCafePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
