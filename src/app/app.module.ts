import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { SwapiFormComponent } from './components/swapi-form/swapi-form.component';
import { SwapiResultsComponent } from './components/swapi-results/swapi-results.component';
import { HttpClientModule } from '@angular/common/http';
import { SwapiCharacterComponent } from './components/swapi-character/swapi-character.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SwapiFormComponent,
    SwapiResultsComponent,
    SwapiCharacterComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
