/**
 * Title: app-routing.module.ts
 * Date: February 8, 2023
 * Author: Jamal Eddine Damir
 * Description: gpa-calculator-app routing file
 * Sources:
 * Source code from class GitHub Repository
 * Instructor provided assignment specific instructions
 */

// Importing modules and components
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseLayoutComponent } from './base-layout/base-layout.component';
import { HomeComponent } from './home/home.component';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignInGuard } from './sign-in.guard';

// Defining application routes
const routes: Routes = [
  {
    path: '',
    component: BaseLayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
    ],
    canActivate: [SignInGuard],
  },
  {
    path: 'session',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'not-found',
        component: NotFoundComponent,
      },
      {
        path: 'sign-in',
        component: SignInComponent,
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'session/not-found',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

// Exporting Router module
export class AppRoutingModule {}
