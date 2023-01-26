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
import { ComposerService } from '../composer.service';
import { IComposer } from '../composer.interface';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { Observable } from 'rxjs';

// component to display composer list
@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css'],
})
export class ComposerListComponent implements OnInit {
  composers: Observable<IComposer[]>;
  txtSearchControl = new FormControl('');

  constructor(private composerService: ComposerService) {
    // Initializing composers property as an array containing elements of the Composer class
    this.composers = this.composerService.getComposers();

    // Debounce function slowing down the number of times the filterComposer is called
    this.txtSearchControl.valueChanges
      .pipe(debounceTime(500))
      .subscribe((val) => this.filterComposers(val || ''));
  }

  //OnInit method to be called after composer-list component is initialized
  ngOnInit(): void {}

  filterComposers(name: string) {
    this.composers = this.composerService.filterComposers(name);
  }
}
