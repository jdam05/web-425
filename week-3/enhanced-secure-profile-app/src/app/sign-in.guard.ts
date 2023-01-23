/**
 * Title: sign-in.guard.ts
 * Date: January 12, 2023
 * Author: Jamal Eddine Damir
 * Description: Profile app sign-in guard
 * Sources:
 * Source code from class GitHub Repository
 * Instructor provided assignment specific instructions
 */

// Importing required elements
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

// Applying Injectable
@Injectable({
  providedIn: 'root',
})

// Defining class and implementing canActivate interface
export class SignInGuard implements CanActivate {
  constructor(private router: Router) {}

  // Implementing can activate method
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    let isLoggedIn = next.queryParams['isLoggedIn'];

    // Conditional statement to allow access to the route or redirect to root if false
    if (isLoggedIn) {
      return true;
    } else {
      this.router.navigate(['/']);
      return false;
    }
  }
}
