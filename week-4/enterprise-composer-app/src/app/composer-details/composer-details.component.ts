/**
 * Title: composer-details.component.ts
 * Date: January 12, 2023
 * Author: Jamal Eddine Damir
 * Description: Composer details component
 * Sources:
 * Source code from class GitHub Repository
 * Instructor provided assignment specific instructions
 */

// Importing modules
import { Component, OnInit } from '@angular/core';
import { IComposer } from '../composer.interface';
import { ComposerService } from '../composer.service';
import { ActivatedRoute } from '@angular/router';

// Defining component to display composer details
@Component({
  selector: 'app-composer-details',
  templateUrl: './composer-details.component.html',
  styleUrls: ['./composer-details.component.css'],
})
export class ComposerDetailsComponent implements OnInit {
  // Field to hold composer ID
  composerId: number;
  // Field to hold composer object
  composer!: IComposer;

  // Accessing route parameters
  constructor(
    private route: ActivatedRoute,
    private composerService: ComposerService
  ) {
    this.composerId = parseInt(
      this.route.snapshot.paramMap.get('composerId')!,
      10
    );

    // Conditional to check if the composerId is valid and assigns composer object to composer field
    if (this.composerId) {
      this.composer = this.composerService.getComposer(this.composerId);
    }
  }

  ngOnInit(): void {}
}
