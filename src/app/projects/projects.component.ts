import { Component, OnInit } from '@angular/core';
import { Project } from '../models/models';
import { title } from 'process';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projectList: Project[] = [
    {
      title: 'Unified ETA',
      technologies: 'Node.js, TypeScript, SQL, AWS',
      desc: [
        'This is my most recent project I am working on under Infosys as a senior Node.js developer.',
        'It is a distributed systems application to maintain a journey map of a vehicle with Estimates and Actuals.',
      ]
    },
    {
      title: 'Monroney',
      technologies: 'Node.js, Angular, SQL, AWS',
      desc: [
        'This is one of my recent project I worked under Infosys as a Full-Stack MEAN developer.',
        'This project maintains all the specifications about a vehicle such as VIN, accessories, pricing details etc.',
      ]
    },
    {
      title: 'Vehicle Model Audit',
      technologies: 'Node.js, Angular, SQL, AWS',
      desc: [
        'This is one of my recent project I worked under Infosys as a Full-Stack MEAN developer.',
        'This project maintains vehicle audit and audit related information in the application.',
      ]
    },
    {
      title: 'Offset and Time-Ordering based IDS',
      technologies: 'Computer Networks, LSTM, Python, NS2',
      desc: [
        'This project was a part of dissertation for completion of MTech degree.',
        'An Intrusion Detection System based on Time Interval and Offset Ordering', 
        'to secure the intravehicular networks from various kinds of anomalous attacks', 
        'and intrusions using the LSTM neural network to classify the different types of attacks'
      ]
    },
    {
      title: 'Android Application',
      technologies: 'Kotlin, Java, UI/UX Design',
      desc: [
        'It was an informative application on my college, developed with the help of Android Studio platform.'
      ]
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
