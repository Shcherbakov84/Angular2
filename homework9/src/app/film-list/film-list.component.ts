import { Component, OnInit } from '@angular/core';
import {FilmService} from '../services/film.service'

@Component({
  selector: 'film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.css']
})
export class FilmListComponent implements OnInit {

  filmList : Object[] = []
  filmName : string; 
  constructor(private filmCardService: FilmService) { }

  ngOnInit() {
    this.filmName = "Lord"
    this.getFilms();
  }

  private getFilms() {
    if(this.filmName) {
      this.filmCardService.getFilms(this.filmName).subscribe(data => {
      this.filmList = data;
      })
    }
  }
}
 