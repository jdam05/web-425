/**
 * Title: base-layout.component.ts
 * Date: February 8, 2023
 * Author: Jamal Eddine Damir
 * Description: Base layout component for gpa-calculator-app
 * Sources:
 * Source code from class GitHub Repository
 * Instructor provided assignment specific instructions
 */

// Import Component object
import { Component } from '@angular/core';

// defining component's metadata
@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.css'],
})
export class BaseLayoutComponent {
  assignment: string;

  constructor() {
    this.assignment = 'Exercise 6.4 - Input Properties';
  }
}
