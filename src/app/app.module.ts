import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//router modules
import { RouterModule,Routes} from '@angular/router';
import { Injectable } from '@angular/core';
import { Headers, Http, Response, HttpModules, URLSearchParams, RequestOptions } from '@angular/Https';
import { Observable } from 'rxjs/Observable';




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path:'home',component:HomeComponent}

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
