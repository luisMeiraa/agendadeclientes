import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FichaClientePageRoutingModule } from './ficha-cliente-routing.module';

import { FichaClientePage } from './ficha-cliente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FichaClientePageRoutingModule
  ],
  declarations: [FichaClientePage]
})
export class FichaClientePageModule {}
