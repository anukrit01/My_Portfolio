import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.scss']
})
export class PersonalInformationComponent implements OnInit {
  myData: string[][] = [
    ['Name', 'Anukrit Tiwari'],
    ['DOB', '14/10/1997'],
    ['Work Exp', '4 Years'],
    ['Education', 'MTech (2021)'],
    ['Interests', 'Competitive Coding']
  ];

  aboutMe: string[] = [
    ' Hi, I am an experienced Software Engineer with demonstrated history of working in IT industry using Agile model.',
    'Skilled in JavaScript, TypeScript, C++, Python, Data Structures and Algorithms.',
    'Strong engineering professional with a Master of Technology - MTech focused in Computer Science & Engineering from National Institute of Technology, Hamirpur.'
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
