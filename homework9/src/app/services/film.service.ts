import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FilmService {
  url: string = 'http://www.omdbapi.com';
  apiKey: string = '520bbe17';
  
  constructor(private http: Http) { }

  private extractListData(res: Response) {
    let body = res.json();
    return body.Search || [];
  }

  private extractItemData(res: Response) {
    let body = res.json();
    return body || {};
  }

  getFilms (filmName: string) {
    return this.http.get(`${this.url}/?page=1&s=${filmName}&apikey=${this.apiKey}`).map(this.extractListData);
  }

  getFilmById (filmId: string) {
    return this.http.get(`${this.url}/?i=${filmId}&apikey=${this.apiKey}`).map(this.extractItemData);
  }
}
