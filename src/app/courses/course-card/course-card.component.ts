import {
    AfterContentInit,
    AfterViewInit,
    ChangeDetectionStrategy,
    Component,
    ContentChildren,
    ElementRef,
    EventEmitter,
    Input,
    OnInit,
    Output,
    QueryList,
    ViewEncapsulation
} from '@angular/core';
import {Course} from '../../model/course';
import { CoursesService } from '../services/courses.service';
import { NgIf, NgSwitch, NgSwitchCase } from '@angular/common';

@Component({
    selector: 'course-card',
    templateUrl: './course-card.component.html',
    styleUrls: ['./course-card.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [NgIf, NgSwitch, NgSwitchCase]
})
export class CourseCardComponent implements OnInit {

    @Input()
    course: Course;

    @Input()
    cardIndex: number;

    @Output('courseChanged')
    courseEmitter = new EventEmitter<Course>();


    constructor(private courseService:CoursesService) {

    }

    ngOnInit() {
console.log("card service "+ this.courseService.id);
    }

    onTitleChange(newtitle:string){
        debugger
     this.course.description=newtitle;
    }
    onSaveClicked(description:string) {
        this.courseEmitter.emit({...this.course, description});

    }




}
