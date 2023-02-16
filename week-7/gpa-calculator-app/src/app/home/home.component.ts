/**
 * Title: home.component.ts
 * Date: February 8, 2023
 * Author: Jamal Eddine Damir
 * Description: Home component for gpa-calculator-app
 * Sources:
 * Source code from class GitHub Repository
 * Instructor provided assignment specific instructions
 */

// Import Component object
import { Component, OnInit } from '@angular/core';
import { ITranscript } from '../transcript.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// defining component's metadata
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  selectableGrades: Array<string> = [
    'A',
    'A-',
    'B+',
    'B',
    'B-',
    'C+',
    'C',
    'C-',
    'D+',
    'D',
    'D-',
    'F',
  ];
  transcriptEntries: Array<ITranscript> = [];
  gpaTotal: number = 0;
  transcriptForm: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.transcriptForm = this.fb.group({
      course: ['', Validators.required],
      grade: ['', Validators.required],
    });
  }

  get form() {
    return this.transcriptForm.controls;
  }

  onSubmit(event: any) {
    this.transcriptEntries.push({
      course: this.form['course'].value,
      grade: this.form['grade'].value,
    });

    event.currentTarget.reset();
  }

  // Method to calculate GPA
  calculateResults() {
    let gpa: number = 0;
    for (let entry of this.transcriptEntries) {
      console.log(entry.grade);
      switch (entry.grade) {
        case 'A':
          console.log('its an a');
          gpa += 4.0;
          break;
        case 'A-':
          gpa += 3.7;
          break;
        case 'B+':
          gpa += 3.33;
          break;
        case 'B':
          gpa += 3.0;
          break;
        case 'B-':
          gpa += 2.7;
          break;
        case 'C+':
          gpa += 2.3;
          break;
        case 'C-':
          gpa += 1.7;
          break;
        case 'D+':
          gpa += 1.3;
          break;
        case 'D':
          gpa += 1.0;
          break;
        case 'D-':
          gpa += 0.7;
          break;
        default:
          gpa += 0.0;
          break;
      }
    }
    this.gpaTotal = gpa / this.transcriptEntries.length;
  }

  // Clearing entries
  clearEntries() {
    this.transcriptEntries = [];
    this.gpaTotal = 0;
  }
}
