import { Routes } from '@angular/router';
import { CadastrarItemCafeComponent } from './modules/itens-cafe/cadastrar-item-cafe.component';
import { ListarItensCafeComponent } from './modules/itens-cafe/listar-itens-cafe.component';
import { CadastrarColaboradorPage } from './pages/cadastrar-colaborador.page';
import { HomePage } from './pages/home.page';
import { ListarColaboradoresPage } from './pages/listar-colaboradores.page';

export const appRoutes: Routes = [
  { path: '', component: HomePage },
  { path: 'colaboradores', component: ListarColaboradoresPage },
  { path: 'colaboradores/novo', component: CadastrarColaboradorPage },
  { path: 'cafe/cadastrar', component: CadastrarItemCafeComponent },
  { path: 'cafe/listar', component: ListarItensCafeComponent }
];
