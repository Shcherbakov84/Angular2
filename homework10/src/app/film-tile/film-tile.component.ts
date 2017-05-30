import { Component, OnInit, Input } from '@angular/core';
import {FilmService} from '../shared/film.service';

@Component({
  selector: 'film-tile',
  templateUrl: './film-tile.component.html',
  styleUrls: ['./film-tile.component.css']
})
export class FilmTileComponent implements OnInit {

  @Input() filmId: string;
  private filmItem: Object = {};

  constructor(private filmTileService: FilmService) { }
  
  private getFilmInfo() {
    if(this.filmId) {
      this.filmTileService.getFilmById(this.filmId).subscribe(filmInfo => {
        this.filmItem = filmInfo || {};
      })
    }
  }

  ngOnInit() {
    this.getFilmInfo();
  }
}
