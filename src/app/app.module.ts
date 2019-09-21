import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UdemyComponent } from './udemy/udemy.component';
import { CoursesComponent } from './courses.component';
import { CoursesService } from './courses.service';

@NgModule({
  declarations: [
    AppComponent,
    UdemyComponent,
CoursesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CoursesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
