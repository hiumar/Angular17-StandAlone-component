import { Pipe, PipeTransform } from "@angular/core";
import { Course } from "../../model/course";



@Pipe({
    name: 'filterByCategory',
    standalone: true
})
export class FilterByCategoryPip implements PipeTransform{

    transform(coures: Course[], category:string) {
        return coures.filter(course=>course.category===category)
    }
}