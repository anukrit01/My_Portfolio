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
      level: 'Intermediate',
      rating: 70
    },
    {
      name: 'Node.js',
      level: 'Intermediate',
      rating: 70
    },
    {
      name: 'HTML, CSS',
      level: 'Expert',
      rating: 90
    },
    {
      name: 'TypeScript',
      level: 'Intermediate',
      rating: 75
    },
    {
      name: 'JavaScript',
      level: 'Intermediate',
      rating: 65
    },
    {
      name: 'C++',
      level: 'Expert',
      rating: 85
    },
    {
      name: 'Python',
      level: 'Intermediate',
      rating: 65
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
