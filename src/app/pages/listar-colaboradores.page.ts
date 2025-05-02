import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';

import { Colaborador } from '../models/colaborador.model';
import { ColaboradorService } from '../services/colaborador.service';

@Component({
  standalone: true,
  selector: 'app-listar-colaboradores',
  templateUrl: './listar-colaboradores.page.html',
  styleUrls: ['./listar-colaboradores.page.css'],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatTableModule,
    RouterModule
  ]
})
export class ListarColaboradoresPage implements OnInit {
  displayedColumns: string[] = ['id', 'nome', 'cpf', 'acoes'];
  colaboradores: Colaborador[] = [];

  constructor(private colaboradorService: ColaboradorService) {}

  ngOnInit(): void {
    this.colaboradorService.listar().subscribe({
      next: (dados) => this.colaboradores = dados,
      error: (erro) => console.error('Erro ao listar colaboradores:', erro)
    });
  }
}
