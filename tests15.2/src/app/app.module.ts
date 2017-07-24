import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { AdultTestFormComponent } from './adult-test-form/adult-test-form.component';

@NgModule({
  declarations: [
    AppComponent,
    AdultTestFormComponent  
  ],
  imports: [
    BrowserAnimationsModule,
    MaterialModule,
    BrowserModule,  
    FormsModule,  
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

