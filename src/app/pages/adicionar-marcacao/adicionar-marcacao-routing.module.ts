import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdicionarMarcacaoPage } from './adicionar-marcacao.page';

const routes: Routes = [
  {
    path: '',
    component: AdicionarMarcacaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdicionarMarcacaoPageRoutingModule {}
