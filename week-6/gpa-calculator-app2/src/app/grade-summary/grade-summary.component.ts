/**
 * Title: grade-summary.component.ts
 * Date: February 9, 2023
 * Author: Jamal Eddine Damir
 * Description: Grade summary component
 * Sources:
 * Source code from class GitHub Repository
 * Instructor provided assignment specific instructions
 */

// Importing the required modules
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grade-summary',
  templateUrl: './grade-summary.component.html',
  styleUrls: ['./grade-summary.component.css'],
})
export class GradeSummaryComponent implements OnInit {
  @Input() grade: string = '';
  @Input() course: string = '';

  constructor() {}

  ngOnInit(): void {}
}
