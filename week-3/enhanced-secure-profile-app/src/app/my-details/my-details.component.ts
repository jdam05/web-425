/**
 * Title: my-details.component.ts
 * Date: January 21, 2023
 * Author: Jamal Eddine Damir
 * Description: my-details component for enhanced-secure-profile-app
 * Sources:
 * Source code from class GitHub Repository
 * Instructor provided assignment specific instructions
 */

import { Component, OnInit } from '@angular/core';

// Class for creating person objects
export default class Person {
  fullName: string;
  favoriteFood: string;
  favoriteColor: string;
  keywords = ['#TypeScript', '#2023', 'CodingWithAngular', '#ngOmaha'];

  // Initializing object properties
  constructor(fullName: string, favoriteFood: string, favoriteColor: string) {
    this.fullName = fullName;
    this.favoriteFood = favoriteFood;
    this.favoriteColor = favoriteColor;
  }

  // Method displaying person's details
  toString() {
    console.log(
      `\n Full name: ${this.fullName}\n Favorite food: ${this.favoriteFood}\n Favorite color: ${this.favoriteColor}`
    );
  }
}

// Component that displays person's details
@Component({
  selector: 'app-my-details',
  templateUrl: './my-details.component.html',
  styleUrls: ['./my-details.component.css'],
})
export class MyDetailsComponent implements OnInit {
  //property to hold person object
  myProfile: Person;

  constructor() {
    this.myProfile = new Person('Jamal Damir', 'Couscous', 'green');
    this.myProfile.toString();
  }
  ngOnInit(): void {}
}
