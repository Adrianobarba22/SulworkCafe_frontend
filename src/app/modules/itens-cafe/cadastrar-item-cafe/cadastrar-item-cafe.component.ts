import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Colaborador } from 'src/app/models/colaborador.model';
import { ColaboradorService } from 'src/app/services/colaborador.service';
import { ItemCafeService } from 'src/app/services/item-cafe.service';

@Component({
  selector: 'app-cadastrar-item-cafe',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './cadastrar-item-cafe.component.html',
  styleUrls: ['./cadastrar-item-cafe.component.css']
})
export class CadastrarItemCafeComponent {
  form: FormGroup;
  colaboradores: Colaborador[] = [];

  constructor(
    private fb: FormBuilder,
    private colaboradorService: ColaboradorService,
    private itemCafeService: ItemCafeService
  ) {
    this.form = this.fb.group({
      colaboradorId: [null, Validators.required],
      descricao: ['', [Validators.required, Validators.minLength(2)]],
      dataEvento: [null, Validators.required]
    });

    this.colaboradorService.listar().subscribe(data => {
      this.colaboradores = data;
    });
  }

  salvar() {
    if (this.form.invalid) return;

    const novoItem = this.form.value;
    this.itemCafeService.salvar(novoItem).subscribe({
      next: () => {
        alert('Item cadastrado com sucesso!');
        this.form.reset();
      },
      error: err => alert('Erro ao cadastrar item: ' + err.message)
    });
  }
}
