import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ColaboradorService } from 'src/app/services/colaborador.service';

@Component({
  selector: 'app-cadastrar-colaborador',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule
  ],
  templateUrl: './cadastrar-colaborador.component.html',
  styleUrl: './cadastrar-colaborador.component.css'
})
export class CadastrarColaboradorComponent {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private service: ColaboradorService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {
    this.form = this.fb.group({
      nome: ['', Validators.required],
      cpf: ['', [Validators.required, Validators.pattern(/^\d{11}$/)]]
    });
  }

  cadastrar() {
    if (this.form.valid) {
      this.service.salvar(this.form.value).subscribe({
        next: () => {
          this.snackBar.open('Colaborador cadastrado com sucesso!', 'Fechar', { duration: 3000 });
          this.router.navigate(['/colaboradores']);
        },
        error: () => {
          this.snackBar.open('Erro ao cadastrar colaborador.', 'Fechar', { duration: 3000 });
        }
      });
    }
  }
}
