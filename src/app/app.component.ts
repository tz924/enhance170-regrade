import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'enhance170';
  currentCourse: Course = { department: 'CSE', id: 138, attendence: 123 };
}

export interface Course {
  department: string;
  id: number;
  attendence: number;
}
