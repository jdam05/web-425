/**
 * Title: sign-in.component.ts
 * Date: January 12, 2023
 * Author: Jamal Eddine Damir
 * Description: Sign-in Component
 * Sources:
 * Source code from class GitHub Repository
 * Instructor provided assignment specific instructions
 */

// Importing component object
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// defining component's metadata
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
  isLoggedIn = false;
  constructor(private router: Router) {}
  ngOnInit(): void {}

  signin() {
    this.isLoggedIn = true;
    this.router.navigate(['/home'], {
      queryParams: { isLoggedIn: this.isLoggedIn },
      skipLocationChange: true,
    });
  }
}
