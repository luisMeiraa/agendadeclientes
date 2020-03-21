import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FichaClientePage } from './ficha-cliente.page';

const routes: Routes = [
  {
    path: '',
    component: FichaClientePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FichaClientePageRoutingModule {}
