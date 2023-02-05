/**
 * Title: book.interface.ts
 * Date: February 4, 2023
 * Author: Jamal Eddine Damir
 * Description: Interface for the book object
 * Sources:
 * Source code from class GitHub Repository
 * Instructor provided assignment specific instructions
 */

// Defining IBook interface

export interface IBook {
  isbn: string;
  title: string;
  description: string;
  numOfPages: number;
  authors: Array<string>;
}
