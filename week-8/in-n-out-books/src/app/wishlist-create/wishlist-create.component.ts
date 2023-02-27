/**
 * Title: wishlist-create.component.ts
 * Date: February 8, 2023
 * Author: Jamal Eddine Damir
 * Description: Component to create wishlist items
 * Sources:
 * Source code from class GitHub Repository
 * Instructor provided assignment specific instructions
 */

// Importing required elements
import { IWishlistItem } from './../wishlist-item.interface';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

// defining component's metadata
@Component({
  selector: 'app-wishlist-create',
  templateUrl: './wishlist-create.component.html',
  styleUrls: ['./wishlist-create.component.scss'],
})
export class WishlistCreateComponent implements OnInit {
  // Event emitter to emit an IWishlistItem object when an item is added
  @Output() addItemEmitter = new EventEmitter<IWishlistItem>();

  item: IWishlistItem;

  // initializing item as an empty IWishlistItem object
  constructor() {
    this.item = {} as IWishlistItem;
  }

  ngOnInit(): void {}

  // Method to add item to the wishlist by emitting an IWishlistItem object
  addItem() {
    this.addItemEmitter.emit({
      title: this.item.title,
      authors: this.item.authors,
    });
    // Resetting item to an empty IWishlistItem object
    this.item = {} as IWishlistItem;
  }
}
