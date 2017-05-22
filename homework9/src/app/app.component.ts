import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Каталог фильмов JSExpert';

  links = [
    { path: '/dashboard', icon: 'apps', label: 'Главная'},
    { path: '/filmList', icon: 'movie', label: 'Все фильмы'},
    { path: '/profile', icon: 'account_circle', label: 'Профиль'}
  ];

}
