import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professor',
  templateUrl: './professor.component.html',
  styleUrls: ['./professor.component.css']
})
export class ProfessorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

interface Question {
  content: string;
  duration: number;
  replies: number;
  likes: number;
  index: number;

}
