import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatListModule } from '@angular/material/list';
import { ItemCafe } from '../../models/item-cafe.model';
import { ItemCafeService } from '../../services/item-cafe.service';

@Component({
  selector: 'app-listar-itens-cafe',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatListModule, MatCheckboxModule, FormsModule],
  templateUrl: './listar-itens-cafe.component.html',
  styleUrls: ['./listar-itens-cafe.component.css']
})
export class ListarItensCafeComponent {
  private service = inject(ItemCafeService);
  itens: ItemCafe[] = [];

  ngOnInit(): void {
    this.service.listarTodos().subscribe(data => {
      this.itens = data;
    });
  }

  isHojeOuAntes(data: string): boolean {
    return new Date(data) <= new Date();
  }

  marcarEntregue(item: ItemCafe) {
    if (!this.isHojeOuAntes(item.data)) return;

    item.entregue = true;
    this.service.atualizar(item).subscribe();
  }
}
