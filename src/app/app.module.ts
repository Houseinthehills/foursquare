import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { LocationComponent } from './location/location.component';
import { ImageLocationComponent } from './image-location/image-location.component';
import { SpecificLocationComponent } from './specific-location/specific-location.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LocationComponent,
    ImageLocationComponent,
    SpecificLocationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
