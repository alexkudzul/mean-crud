import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Modulos para formularios y http => comunicacion de la API
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { PostsComponent } from './components/posts/posts.component';


@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
