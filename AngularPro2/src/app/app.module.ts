import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { CoursesService } from './courses.service';
import { PipesTrialComponent } from './pipesTrial.component';
import { SummaryPipe } from './summary.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    PipesTrialComponent,
    SummaryPipe
  ],
  //declarartions array we register all the components
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [CoursesService],
  //providers array we register all the dependencies that components in this module are dependent on
  // if we donot register our service as provider in our module the dependency will not work.
  bootstrap: [AppComponent]
})
export class AppModule { }
