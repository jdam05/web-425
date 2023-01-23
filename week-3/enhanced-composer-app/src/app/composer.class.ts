/**
 * Title: composer.class.ts
 * Date: January 21, 2023
 * Author: Jamal Eddine Damir
 * Description: Class file for the composer object
 * Sources:
 * Source code from class GitHub Repository
 * Instructor provided assignment specific instructions
 */

import { IComposer } from './composer.interface';

// Defining and exporting Composer class
export class Composer {
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
  getComposers() {
    return this.composers;
  }

  // Method returning specific composer
  getComposer(composerId: number): IComposer {
    // Iterate over the composers array and return composer data if there is a match of composerId
    for (let composer of this.composers) {
      if (composer.composerId === composerId) {
        return composer;
      }
    }

    // Return IComposer object if no match is found
    return {} as IComposer;
  }
}
