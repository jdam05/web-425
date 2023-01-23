/**
 * Title: app.routing.ts
 * Date: January 12, 2023
 * Author: Jamal Eddine Damir
 * Description:  Routing file
 * Sources:
 * Source code from class GitHub Repository
 * Instructor provided assignment specific instructions
 */

// Importing Components
import { Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { HomeComponent } from './home/home.component';
import { SignInGuard } from './sign-in.guard';

// Defining application routes
export const AppRoutes: Routes = [
  {
    path: '',
    component: SignInComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [SignInGuard],
  },
];
