import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoursesModule } from './courses/courses.module';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

@NgModule({ declarations: [
        AppComponent
    ],
    bootstrap: [AppComponent], 
    imports: [CoursesModule,BrowserModule,BrowserAnimationsModule], 
    providers: [provideHttpClient(withInterceptorsFromDi())] })
export class AppModule { }
