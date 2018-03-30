import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material';

import { CecRoutingModule } from './cec-routing.module';
import { CecPageComponent } from './cec-page/cec-page.component';
import { MinutesComponent } from './minutes/minutes.component';

@NgModule({
  imports: [
    CommonModule,
    CecRoutingModule,
    MatGridListModule
  ],
  declarations: [CecPageComponent, MinutesComponent]
})
export class CecModule { }
