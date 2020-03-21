import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdicionarClientePageRoutingModule } from './adicionar-cliente-routing.module';

import { AdicionarClientePage } from './adicionar-cliente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdicionarClientePageRoutingModule
  ],
  declarations: [AdicionarClientePage]
})
export class AdicionarClientePageModule {}
