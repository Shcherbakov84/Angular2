import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';

import { routes } from "./app.routes";
import { AppComponent } from './app.component';
import { FilmCardComponent } from './film-card/film-card.component';
import { FilmListComponent } from './film-list/film-list.component';
import { FilmSearchComponent } from './film-search/film-search.component';
import { FilmTileComponent } from './film-tile/film-tile.component';
import { DetailedFilminfoComponent } from './detailed-filminfo/detailed-filminfo.component';

import { FilmService } from './shared/film.service';
import { SendingInfoService } from './shared/sendingInfo.service';

@NgModule({
  declarations: [
    AppComponent,
    FilmCardComponent,
    FilmListComponent,
    FilmSearchComponent,
    FilmTileComponent,
    DetailedFilminfoComponent
  ],
  imports: [
    BrowserAnimationsModule,
    MaterialModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [FilmService, SendingInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
