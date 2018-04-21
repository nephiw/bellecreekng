import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material';
import { MarkdownModule } from 'ngx-markdown';

import { CecRoutingModule } from './cec-routing.module';
import { CecPageComponent } from './cec-page/cec-page.component';
import { MinutesComponent } from './minutes/minutes.component';
import { MinutesService } from './cec-page/minutes.service';
import { MomentPipe } from './moment/moment.pipe';
import * as moment from 'moment';

@NgModule({
  imports: [
    CommonModule,
    CecRoutingModule,
    MatGridListModule,
    MarkdownModule.forChild(),
  ],
  declarations: [
    CecPageComponent,
    MinutesComponent,
    MomentPipe
  ],
  providers: [
    { provide: 'moment', useValue: moment },
    MinutesService
  ]
})
export class CecModule { }
