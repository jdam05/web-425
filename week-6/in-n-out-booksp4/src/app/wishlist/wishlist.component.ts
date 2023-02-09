/**
 * Title: wishlist.component.ts
 * Date: February 8, 2023
 * Author: Jamal Eddine Damir
 * Description: Wishlist component
 * Sources:
 * Source code from class GitHub Repository
 * Instructor provided assignment specific instructions
 */

// Importing required elements
import { Component, OnInit } from '@angular/core';
import { IWishlistItem } from '../wishlist-item.interface';

// defining component's metadata
@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss'],
})

// Exporting WishlistComponent class
export class WishlistComponent implements OnInit {
  // Declaring an array property to store items of type IWishlistItem
  items: Array<IWishlistItem> = [];

  constructor() {}
  ngOnInit(): void {}

  // Method that handles pushing items to the item array
  updateItemsHandler(item: IWishlistItem) {
    this.items.push(item);
  }
}
