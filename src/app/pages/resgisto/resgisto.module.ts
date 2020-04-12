import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResgistoPageRoutingModule } from './resgisto-routing.module';

import { ResgistoPage } from './resgisto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResgistoPageRoutingModule
  ],
  declarations: [ResgistoPage]
})
export class ResgistoPageModule {}
