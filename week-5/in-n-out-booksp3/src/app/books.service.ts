/**
 * Title: composer.service.ts
 * Date: February 4, 2023
 * Author: Jamal Eddine Damir
 * Description:
 * Sources: File containing books service class
 * Source code from class GitHub Repository
 * Instructor provided assignment specific instructions
 */

import { Injectable } from '@angular/core';
import { IBook } from './book.interface';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  books: Array<IBook>;

  constructor() {
    // Initializing property with array of book objects
    this.books = [
      {
        isbn: '1599869772',
        title: 'The Art Of War',
        description:
          'An ancient Chinese military treatise attributed to Sun Tzu, a high-ranking military general, strategist and tactician, and kindred to the Realpolitik of his time, termed in China as Legalism.',
        numOfPages: 589,
        authors: ['Sun Tzu'],
      },
      {
        isbn: '9780143111580',
        title: 'Dune (Penguin Galaxy)',
        description:
          'A mythic and emotionally charged hero’s journey, Dune tells the story of Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, who must travel to the most dangerous planet in the universe to ensure the future of his family and his people.',
        numOfPages: 896,
        authors: ['Frank Herbert'],
      },
      {
        isbn: '1515406830',
        title: 'Think and Grow Rich',
        description:
          'Think and Grow Rich reveals the secrets that can bring you fortune. By suppressing negative thoughts and keeping your focus on the long term, you can find true and lasting success.',
        numOfPages: 242,
        authors: ['Napoleon Hill'],
      },
      {
        isbn: '0061129739',
        title: 'The Art of Loving',
        description:
          'Many people are unable to love--and thus live--fully. Renowned psychoanalyst Erich Fromm has helped generations of men and women achieve rich and productive lives by developing their capacity to love.',
        numOfPages: 180,
        authors: ['Erich Fromm'],
      },
      {
        isbn: '0061898813',
        title: 'Shutter Island',
        description:
          'A masterwork of suspense and surprise from the author of Mystic River and Gone, Baby, Gone, Shutter Island carries the reader into a nightmare world of madness, mind control, and CIA Cold War paranoia and is unlike anything you’ve ever read before.',
        numOfPages: 400,
        authors: ['Dennis Lehane'],
      },
    ];
  }

  // Method returning an array of books
  getBooks(): Observable<IBook[]> {
    return of(this.books);
  }

  // Method returning specific books
  getBook(isbn: string): IBook {
    for (let book of this.books) {
      if (book.isbn === isbn) {
        return book;
      }
    }
    // Return IBook object if no match is found
    return {} as IBook;
  }
}
