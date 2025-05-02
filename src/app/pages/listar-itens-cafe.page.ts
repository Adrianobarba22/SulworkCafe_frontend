import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ItemCafe } from '../models/item-cafe.model';
import { ItemCafeService } from '../services/item-cafe.service';

@Component({
  selector: 'app-listar-itens-cafe',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listar-itens-cafe.page.html',
  styleUrls: ['./listar-itens-cafe.page.css'],
})
export class ListarItensCafePage implements OnInit {
  itens: ItemCafe[] = [];

  constructor(private service: ItemCafeService) {}

  ngOnInit(): void {
    this.service.listar().subscribe({
      next: (dados) => (this.itens = dados),
      error: (erro) => console.error('Erro ao carregar itens', erro),
    });
  }
}
