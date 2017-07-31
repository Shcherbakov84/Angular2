import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { CalcFormComponent } from './calc-form/calc-form.component';
import { CalcPriceService } from './calc-service/calc-price.service';

@NgModule({
  declarations: [
    AppComponent,
    CalcFormComponent
  ],
  imports: [
    BrowserAnimationsModule,
    MaterialModule,
    BrowserModule,  
    FormsModule 
  ],
  providers: [CalcPriceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
