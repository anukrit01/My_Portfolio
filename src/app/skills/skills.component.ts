import { Component, OnInit } from '@angular/core';
import { Skill } from '../models/models';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  skillList: Skill[] = [
    {
      name: 'Angular.js',
      level: 'Expert',
      rating: 80
    },
    {
      name: 'Node.js',
      level: 'Proficient',
      rating: 90
    },
    {
      name: 'HTML, CSS',
      level: 'Expert',
      rating: 90
    },
    {
      name: 'TypeScript',
      level: 'Expert',
      rating: 80
    },
    {
      name: 'JavaScript',
      level: 'Expert',
      rating: 80
    },
    {
      name: 'C++',
      level: 'Expert',
      rating: 85
    },
    {
      name: 'MySQL',
      level: 'Expert',
      rating: 80
    },
    {
      name: 'AWS Services',
      level: 'Expert',
      rating: 80
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
