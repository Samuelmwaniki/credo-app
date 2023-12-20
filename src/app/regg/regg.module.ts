import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReggPageRoutingModule } from './regg-routing.module';

import { ReggPage } from './regg.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReggPageRoutingModule
  ],
  declarations: [ReggPage]
})
export class ReggPageModule {}
