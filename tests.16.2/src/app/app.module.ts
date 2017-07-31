import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { ConvertFormComponent } from './convert-form/convert-form.component';
import { ConvertService } from './convert-service/convert.service';

@NgModule({
  declarations: [
    AppComponent,
    ConvertFormComponent
  ],
  imports: [
    BrowserAnimationsModule,
    MaterialModule,
    BrowserModule,  
    FormsModule 
  ],
  providers: [ConvertService],
  bootstrap: [AppComponent]
})
export class AppModule { }
