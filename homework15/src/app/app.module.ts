import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { UsersAccountComponent } from './users-account/users-account.component';
import { MainFormComponent } from './main-form/main-form.component';

import { routes } from "./app.routes";

@NgModule({
  declarations: [
    AppComponent,
    UsersAccountComponent,
    MainFormComponent
  ],
  imports: [
    BrowserAnimationsModule,
    MaterialModule,
    BrowserModule,  
    FormsModule,  
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
