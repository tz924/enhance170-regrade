import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  courses: Course[];

  constructor() { }

  ngOnInit() {
    this.courses = [];

    this.courses.push({ department: 'CSE', id: 138 });
    this.courses.push({ department: 'MGT', id: 160 });
    this.courses.push({ department: 'COGS', id: 120 });
  }

}

interface Course {
  department: string;
  id: number;
}
