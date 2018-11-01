import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses: Course[];

  constructor() { }

  ngOnInit() {
    this.courses = [];

    this.courses.push({ department: 'CSE', id: 138 });
    this.courses.push({ department: 'MGT', id: 160 });
    this.courses.push({ department: 'COGS', id: 120 });

    // (document).ready(function () {
    //   $('#sidebarCollapse').on('click', function () {
    //     $('#sidebar').toggleClass('active');
    //     $(this).toggleClass('active');
    //   });
    // });
  }

}

interface Course {
  department: string;
  id: number;
}
