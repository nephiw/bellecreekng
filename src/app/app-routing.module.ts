import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ModuleWithProviders } from '@angular/compiler/src/core';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cec', loadChildren: './cec/cec.module#CecModule' },
  { path: 'contacts', loadChildren: './contacts/contacts.module#ContactsModule' },
  { path: 'documents', loadChildren: './documents/documents.module#DocumentsModule' },
  { path: '**', redirectTo: '' }
];


export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(routes);
