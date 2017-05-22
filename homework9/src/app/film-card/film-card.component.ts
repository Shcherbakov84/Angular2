import { Component, OnInit, Input } from '@angular/core';
import {FilmService} from '../services/film.service'

@Component({
  selector: 'film-card',
  templateUrl: './film-card.component.html',
  styleUrls: ['./film-card.component.css']
})
export class FilmCardComponent implements OnInit {
  @Input()
  filmId: string; 
  filmItem: {} = {};
  constructor(private filmCardService: FilmService) { }
  
  private getFilmInfo() {
    if(this.filmId) {
      this.filmCardService.getFilmById(this.filmId).subscribe(data => {
        this.filmItem = data;
      })
    }
  }

  ngOnInit() {
    this.getFilmInfo();
  }
}
