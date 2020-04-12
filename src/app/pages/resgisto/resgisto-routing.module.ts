import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResgistoPage } from './resgisto.page';

const routes: Routes = [
  {
    path: '',
    component: ResgistoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResgistoPageRoutingModule {}
