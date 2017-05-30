import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FilmService {
  url: string = 'http://www.omdbapi.com';
  apiKey: string = '520bbe17';
  
  constructor(private http: Http) { }
  
  private extract(res: Response) {
    let body = res.json(); 
    body = body.Search || body;
    return body || {};
  }

  getFilms (filmName: string, filmPage:number = 1) {
    return this.http.get(`${this.url}/?page=${filmPage}&s=${filmName}&apikey=${this.apiKey}`).map(this.extract);
  }

  getFilmById (filmId: string) {
    return this.http.get(`${this.url}/?i=${filmId}&apikey=${this.apiKey}`).map(this.extract);
  }
}
