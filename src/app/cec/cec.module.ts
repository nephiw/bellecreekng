import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material';
import { MarkdownModule } from 'ngx-markdown';
import * as moment from 'moment';

import { CecRoutingModule } from './cec-routing.module';
import { MomentPipe } from './moment/moment.pipe';
import {
  CecPageComponent,
  MinutesComponent,
  MinutesService
} from './cec-page';
import { MinutesCalendarComponent } from './cec-page/minutes-calendar/minutes-calendar.component';

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
    MomentPipe,
    MinutesCalendarComponent
  ],
  providers: [
    { provide: 'moment', useValue: moment },
    MinutesService
  ]
})
export class CecModule { }
