import { Component, OnInit } from '@angular/core';
import { Education } from '../models/models';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  educationList: Education[] = [
    {
      institute: 'National Institute of Technology, Hamirpur',
      course: 'MTech',
      duration: '2019-2021',
      score: '8.87'
    },
    {
      institute: 'Rewa Institute of Technology, Rewa',
      course: 'BE',
      duration: '2014-2018',
      score: '7.61'
    },
    {
      institute: 'Jawahar Navodaya Vidyalaya Sirmour',
      course: '12th',
      duration: '2013-2014',
      score: '65%'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
