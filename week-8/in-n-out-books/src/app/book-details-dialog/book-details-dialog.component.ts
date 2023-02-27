/**
 * Title: book-details-dialog.component.ts
 * Date: February24, 2023
 * Author: Jamal Eddine Damir
 * Description: Book details dialog component
 * Sources:
 * Source code from class GitHub Repository
 * Instructor provided assignment specific instructions
 */

// Importing the required modules
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IBook } from '../book.interface';

// component to display book details
@Component({
  selector: 'app-book-details-dialog',
  templateUrl: './book-details-dialog.component.html',
  styleUrls: ['./book-details-dialog.component.scss'],
})
export class BookDetailsDialogComponent implements OnInit {
  book: IBook;

  constructor(
    private dialogRef: MatDialogRef<BookDetailsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.book = data.book;
  }

  ngOnInit(): void {}
}
