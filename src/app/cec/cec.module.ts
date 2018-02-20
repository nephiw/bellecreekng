import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CecRoutingModule } from './cec-routing.module';
import { CecPageComponent } from './cec-page/cec-page.component';

@NgModule({
  imports: [
    CommonModule,
    CecRoutingModule
  ],
  declarations: [CecPageComponent]
})
export class CecModule { }
