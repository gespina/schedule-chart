import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatRadioModule,
    FlexLayoutModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgScrollbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
