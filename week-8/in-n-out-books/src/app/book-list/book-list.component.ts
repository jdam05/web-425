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
import { MatDialog } from '@angular/material/dialog';
import { BookDetailsDialogComponent } from '../book-details-dialog/book-details-dialog.component';

// component to display list of books
@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit {
  books: Array<IBook> = [];
  book!: IBook;

  constructor(private booksService: BooksService, private dialog: MatDialog) {
    this.booksService.getBooks().subscribe((res) => {
      console.log(res);
      for (let key in res) {
        if (res.hasOwnProperty(key)) {
          let authors = [];
          //@ts-ignore
          if (res[key].details.authors) {
            //@ts-ignore
            authors = res[key].details.authors.map(function (author) {
              return author.name;
            });
          }

          this.books.push({
            //@ts-ignore
            isbn: res[key].details.isbn_13
              ? //@ts-ignore
                res[key].details.isbn_13
              : //@ts-ignore
                res[key].details.isbn_10,
            //@ts-ignore
            title: res[key].details.title,
            //@ts-ignore
            description: res[key].details.subtitle
              ? //@ts-ignore
                res[key].details.subtitle
              : 'N/A',
            //@ts-ignore
            numOfPages: res[key].details.number_of_pages,
            authors: authors,
          });
        }
      }
    });
  }

  //OnInit method to be called after book-list component is initialized
  ngOnInit(): void {}

  showBookDetails(isbn: string) {
    //Book details from the books service based on ISBN number
    //@ts-ignore
    this.book = this.books.find((book) => book.isbn === isbn);

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
