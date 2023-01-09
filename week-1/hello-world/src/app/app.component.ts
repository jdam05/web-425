/**
 * Title: app.component.ts
 * Date: January 8, 2023
 * Author: Jamal Eddine Damir
 * Description: Root component for Hello-world
 * Sources:
 * Source code from class GitHub Repository
 * Instructor provided assignment specific instructions
 */

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  myWorld = "You are now in Jamal's world!!";
}
