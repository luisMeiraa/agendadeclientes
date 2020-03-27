import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdicionarMarcacaoPageRoutingModule } from './adicionar-marcacao-routing.module';

import { AdicionarMarcacaoPage } from './adicionar-marcacao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdicionarMarcacaoPageRoutingModule
  ],
  declarations: [AdicionarMarcacaoPage]
})
export class AdicionarMarcacaoPageModule {}
