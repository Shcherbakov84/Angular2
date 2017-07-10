import { Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { FilmListComponent } from "./film-list/film-list.component";
import { DetailedFilminfoComponent } from "./detailed-filminfo/detailed-filminfo.component";


export const routes: Routes = [
    { path: "", redirectTo: "filmList", pathMatch: "full" },
    { path: "filmList",    component: FilmListComponent },  
    { path: "filmList/:id",   component: DetailedFilminfoComponent }
];


