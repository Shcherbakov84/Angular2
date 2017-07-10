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
  selectedView: string;
  filmList: Object[];
  filmName: string; 

  constructor(private filmCardService: FilmService) { }

  ngOnInit() {
    this.selectedView = this.cardViews[0].value;
    this.filmList = [];
    this.getPopular();
  }

  isFilmListEmpty(): boolean {
    return this.filmList && !this.filmList.length;
  }

  isFilledArray(filmsArray: any): boolean {
    return filmsArray && filmsArray.length;
  }

  getFilmsBySearch(filmName: string) {
    this.filmCardService.getFilmsBySearch(filmName).subscribe( (filmsArray) => {
      this.filmList = ( this.isFilledArray(filmsArray) ) ? filmsArray : [];
    })
  }

  // buildGalleryBySearch(filmName: string) {
  //   this.filmName = filmName;
  //   this.getFilmsBySearch(filmName);
  // }

  addPopularFilms() {
    this.filmCardService.getPopularNextPage().subscribe( (filmsArray: Object[] ) => {
      this.filmList = [...this.filmList, ...filmsArray];
    })
  }

  getPopular() {
    this.filmCardService.getPopular().subscribe( (filmsArray: Object[] ) => {
      this.filmList = ( this.isFilledArray(filmsArray) ) ? filmsArray : [];
    })
  }
}
 