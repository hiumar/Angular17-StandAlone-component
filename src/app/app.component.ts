import {AfterViewInit, Component, ElementRef, Inject, InjectionToken, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {COURSES} from '../db-data';
import {Course} from './model/course';
import { CoursesService } from './courses/services/courses.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  

  courses=COURSES;

  constructor( private coursesService:CoursesService) {
 
  }

  ngOnInit() {
   
  }

  save(course:Course){
debugger
   if(course !=undefined)
      this.coursesService.saveCourse(course).subscribe(()=>console.log("course is saved"));
   }


}
