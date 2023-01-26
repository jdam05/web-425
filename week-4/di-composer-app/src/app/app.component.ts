/**
 * Title: app.component.ts
 * Date: January 21, 2023
 * Author: Jamal Eddine Damir
 * Description: Root component for enhanced-composer-app
 * Sources:
 * Source code from class GitHub Repository
 * Instructor provided assignment specific instructions
 */

// Import Component object
import { Component } from '@angular/core';

// defining component's metadata
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

// AppComponent class
export class AppComponent {
  title = 'Exercise 4.2 - Inversion of Control and Dependency Injection';
}
