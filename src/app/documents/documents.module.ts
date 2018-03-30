import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';

import { DocumentsRoutingModule } from './documents-routing.module';
import { DocumentsPageComponent } from './documents-page/documents-page.component';

@NgModule({
  imports: [
    CommonModule,
    DocumentsRoutingModule,
    MatExpansionModule
  ],
  declarations: [
    DocumentsPageComponent
  ]
})
export class DocumentsModule { }
