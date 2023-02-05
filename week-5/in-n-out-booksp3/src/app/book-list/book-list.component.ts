/**
 * Title: book-list.component.ts
 * Date: February 4, 2023
 * Author: Jamal Eddine Damir
 * Description: Book list component
 * Sources:
 * Source code from class GitHub Repository
 * Instructor provided assignment specific instructions
 */

// Importing the required modules
import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';
import { IBook } from '../book.interface';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { BookDetailsDialogComponent } from '../book-details-dialog/book-details-dialog.component';

// component to display list of books
@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit {
  books: Observable<IBook[]>;
  header: Array<string> = ['isbn', 'title', 'numOfPages', 'authors'];
  book!: IBook;

  constructor(private booksService: BooksService, private dialog: MatDialog) {
    // Initializing books property as an array containing elements of the Book class
    this.books = this.booksService.getBooks();
  }

  //OnInit method to be called after book-list component is initialized
  ngOnInit(): void {}

  showBookDetails(isbn: string) {
    //Book details from the books service based on ISBN number
    this.book = this.booksService.getBook(isbn);

    // Opening book details dialog component
    const dialogRef = this.dialog.open(BookDetailsDialogComponent, {
      data: {
        book: this.book,
      },
      // Disables closing the dialog box by clicking outside of it
      disableClose: true,
      // Setting the width of the dialog box to 800 pixels
      width: '800px',
    });

    // Logs the book details to the console
    console.log(this.book);

    // Subscribing to the afterClosed observable
    dialogRef.afterClosed().subscribe((result) => {
      // If the result equals 'confirm', reset the book details to null
      if (result === 'confirm') {
        this.book = null as any;
      }
    });
  }
}
