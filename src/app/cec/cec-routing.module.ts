import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CecPageComponent, MinutesComponent } from './cec-page';

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
