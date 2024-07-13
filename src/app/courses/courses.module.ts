import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseImageComponent } from './course-image/course-image.component';
import { CourseCardComponent } from './course-card/course-card.component';
import { CoursesService } from './services/courses.service';
import { HighlightedDirective } from './directives/highlighted.directive';
import { NgxUnlessDirective } from './directives/ngx-unless.directive';
import { FilterByCategoryPip } from './directives/filter-by-category-pip';



@NgModule({
    imports: [CommonModule, CourseCardComponent, CourseImageComponent, HighlightedDirective, NgxUnlessDirective, FilterByCategoryPip],
    exports: [CourseCardComponent, CourseImageComponent, FilterByCategoryPip],
    providers: [CoursesService]
})
export class CoursesModule { }
