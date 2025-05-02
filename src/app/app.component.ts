// src/app/app.component.ts

import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <nav>
      <a routerLink="/">Home</a> |
      <a routerLink="/colaboradores">Listar Colaboradores</a> |
      <a routerLink="/colaboradores/cadastrar">Cadastrar Colaborador</a>
    </nav>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {}
