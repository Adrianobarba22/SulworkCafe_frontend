import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { ApplicationConfig } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { provideRouter, Routes } from '@angular/router';
import { CadastrarColaboradorPage } from './pages/cadastrar-colaborador.page';
import { HomePage } from './pages/home.page';
import { ListarColaboradoresPage } from './pages/listar-colaboradores.page';

const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'colaboradores', component: ListarColaboradoresPage },
  { path: 'colaboradores/novo', component: CadastrarColaboradorPage },
];

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withInterceptorsFromDi()),
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
  ],
};
