import { Component } from '@angular/core';

@Component({
  selector: 'ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent {
  courses = [
    { id: 1, name: 'course 1'},
    { id: 2, name: 'course 2'},
    { id: 3, name: 'course 3'}
  ];

  courses2;

  onAdd(){
    this.courses.push({id: 4, name:'course 4'});
  }

  onRemove(course){
    let index = this.courses.indexOf(course);
    this.courses.splice(index, 1);
  }

  onChange(course) {
    course.name = 'UPDATE';
  }

  loadCourses() {
    this.courses2 = [
      { id: 1, name: 'course 1'},
      { id: 2, name: 'course 2'},
      { id: 3, name: 'course 3'}
    ];
  }

  trackCourse(index, course) {
    return course ? course.id : undefined;
  }
}
