import { Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { UsersAccountComponent } from "./users-account/users-account.component";
import { MainFormComponent } from "./main-form/main-form.component";



export const routes: Routes = [
    { path: "", redirectTo: "usersAccount", pathMatch: "full" },
    { path: "usersAccount",    component: UsersAccountComponent },  
    { path: "mainForm",   component: MainFormComponent }
];


