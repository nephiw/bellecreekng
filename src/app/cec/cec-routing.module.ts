import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CecPageComponent } from './cec-page/cec-page.component';
import { MinutesComponent } from './minutes/minutes.component';

const routes: Routes = [{
  path: '',
  component: CecPageComponent,
  children: [
    { path: 'minutes/:date', component: MinutesComponent }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CecRoutingModule { }
