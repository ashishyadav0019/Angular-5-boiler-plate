import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

//Pipes
import { HelloPipe } from './pipes/hello.pipe'


@NgModule({
  declarations: [
    AppComponent,
    HelloPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
