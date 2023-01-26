/**
 * Title: composer.service.ts
 * Date: January 25, 2023
 * Author: Jamal Eddine Damir
 * Description:
 * Sources: File containing service class
 * Source code from class GitHub Repository
 * Instructor provided assignment specific instructions
 */

import { Injectable } from '@angular/core';
import { IComposer } from './composer.interface';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ComposerService {
  composers: Array<IComposer>;

  // Composer class constructor
  constructor() {
    // Initializing property with array of composers objects
    this.composers = [
      { composerId: 103, fullName: 'Ludovico Einaudi', genre: 'Classical' },
      { composerId: 104, fullName: 'John Williams', genre: 'Classical' },
      { composerId: 105, fullName: 'Franz Schubert', genre: 'Classical' },
      { composerId: 106, fullName: 'Frédéric Chopin', genre: 'Classical' },
      {
        composerId: 107,
        fullName: 'Wolfgang Amadeus Mozart',
        genre: 'Classical',
      },
    ];
  }

  // Method returning an array of composers
  getComposers(): Observable<IComposer[]> {
    return of(this.composers);
  }

  // Method returning specific composer
  getComposer(composerId: number) {
    // Iterate over the composers array and return composer data if there is a match of composerId
    for (let composer of this.composers) {
      if (composer.composerId === composerId) {
        return composer;
      }
    }
    // Return IComposer object if no match is found
    return {} as IComposer;
  }

  // Filter composers by entered name
  filterComposers(name: string): Observable<IComposer[]> {
    return of(this.composers).pipe(
      map((composers) =>
        composers.filter(
          (composer) => composer.fullName.toLowerCase().indexOf(name) > -1
        )
      )
    );
  }
}
