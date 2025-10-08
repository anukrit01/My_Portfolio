import { Component, OnInit } from '@angular/core';
import { Experience } from '../models/models';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss']
})
export class WorkExperienceComponent implements OnInit {
  expList: Experience[] = [
    {
      role: 'Digital Specialist Engineer',
      company: 'Infosys',
      duration: 'Sep 2021 - Working Currently',
      desc: [
        'Collaborated with the team to develop web applications using the MEAN stack',
        'Developed and maintained RESTful APIs using Node.js and Express.js',
        'Implemented client-side logic using Angular',
        'Worked with MySQL and MongoDB databases',
        'Conducted code reviews and ensured code quality standards were met',
        'Reduced latency and data load time by 20% using Lazy loading and other methods',
        'Troubleshot and resolved application issues'
      ],
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
