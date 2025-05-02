import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { Colaborador } from '../models/colaborador.model';
import { ColaboradorService } from '../services/colaborador.service';

@Component({
  standalone: true,
  selector: 'app-cadastrar-colaborador',
  templateUrl: './cadastrar-colaborador.page.html',
  styleUrls: ['./cadastrar-colaborador.page.css'],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    RouterModule
  ]
})
export class CadastrarColaboradorPage implements OnInit {
  form: FormGroup;

  constructor(private service: ColaboradorService, private fb: FormBuilder) {
    this.form = this.fb.group({
      nome: [null, Validators.required],
      cpf: [null, Validators.required],
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.form.valid) {
      const colaborador: Colaborador = this.form.value;
      this.service.salvar(colaborador).subscribe({
        next: (response) => console.log('Colaborador salvo com sucesso!', response),
        error: (error) => console.error('Erro ao salvar colaborador', error),
      });
    }
  }
}



