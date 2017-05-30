import { Component, OnInit } from '@angular/core';
import {FilmService} from '../shared/film.service';

@Component({
  selector: 'film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.css']
})

export class FilmListComponent implements OnInit {
  filmList : Object[] = [];
  filmName : string; 
  constructor(private filmCardService: FilmService) { }

  ngOnInit() {
    this.filmName = "Lord";
    this.getFilms();
  }

  private isFilmListEmpty(): boolean {
    return this.filmList && !this.filmList.length;
  }

  private getFilms() {
      this.filmCardService.getFilms(this.filmName).subscribe(filmsArray => {
        this.filmList = (filmsArray && filmsArray.length) ? filmsArray : [];
      })
  }
}


 