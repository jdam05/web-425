/**
 * Title: book-list.component.ts
 * Date: February, 2023
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

  constructor(private booksService: BooksService) {
    // Initializing books property as an array containing elements of the Book class
    this.books = this.booksService.getBooks();
  }

  //OnInit method to be called after book-list component is initialized
  ngOnInit(): void {}

  showBookDetails(isbn: string) {
    this.book = this.booksService.getBook(isbn);
    console.log(this.book);
  }
}
