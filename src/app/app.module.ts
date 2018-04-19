import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatButtonModule, MatCardModule } from '@angular/material';
import { MarkdownModule } from 'ngx-markdown';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { PostSummaryComponent } from './home/post-summary/post-summary.component';
import { firebase } from '../environments/firebase.config';

const materialModules = [
  MatToolbarModule,
  MatButtonModule,
  MatCardModule
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    PostSummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ...materialModules,
    MarkdownModule.forRoot(),
    AngularFireModule.initializeApp(firebase),
    AngularFirestoreModule
  ],
  exports: [
    ...materialModules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
