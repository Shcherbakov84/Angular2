import { Component, OnInit } from '@angular/core';
import {FilmService} from '../shared/film.service';

@Component({
  selector: 'film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.css']
})

export class FilmListComponent implements OnInit {
  cardViews = [
    {value: 'view1', viewValue: 'Film Card'},
    {value: 'view2', viewValue: 'Film Tile'}
  ];
  selectedView: string = this.cardViews[0].value;
  filmList: Object[] = [];
  filmName: string = 'Terminator'; 

  constructor(private filmCardService: FilmService) { }

  ngOnInit() {
    this.getFilms(this.filmName);
  }

  isFilmListEmpty(): boolean {
    return this.filmList && !this.filmList.length;
  }

  isArray(filmsArray): boolean {
    return filmsArray && filmsArray.length;
  }

  getFilms(filmName) {
    this.filmCardService.getFilms(filmName).subscribe(filmsArray => {
      this.filmList = ( this.isArray(filmsArray) ) ? filmsArray : [];
    })
  }

  buildGalleryBySearch(filmName: string) {
    this.filmName = filmName;
    this.getFilms(filmName);
  }

  addFilms() {
    this.filmCardService.getNextFilms(this.filmName).subscribe(filmsArray => {
      this.filmList = [...this.filmList, ...filmsArray];
    })
  }
}
 