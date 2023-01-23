/**
 * Title: composer-list.component.ts
 * Date: January 12, 2023
 * Author: Jamal Eddine Damir
 * Description: Composer list component
 * Sources:
 * Source code from class GitHub Repository
 * Instructor provided assignment specific instructions
 */

// Importing the required modules
import { Component, OnInit } from '@angular/core';
import { Composer } from '../composer.class';
import { IComposer } from '../composer.interface';

// component to display composer list
@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css'],
})
export class ComposerListComponent implements OnInit {
  composers: Array<IComposer>;

  constructor() {
    // Initializing composers property as an array containing elements of the Composer class
    this.composers = new Composer().getComposers();
  }

  //OnInit method to be called after composer-list component is initialized
  ngOnInit(): void {}
}
