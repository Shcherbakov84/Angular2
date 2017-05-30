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
  filmList : Object[] = [{}];
  selectedView: string = this.cardViews[0].value;

  constructor(private filmCardService: FilmService) { }

  ngOnInit() {
    this.getFilms();
  }

  private getFilms(searchResult = "Godfather") {
    this.filmCardService.getFilms(searchResult).subscribe(filmsArray => {
      this.filmList = (filmsArray && filmsArray.length) ? filmsArray : [];
    })
  }


}
 