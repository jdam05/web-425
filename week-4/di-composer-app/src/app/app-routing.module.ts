/**
 * Title: app-routing.module.ts
 * Date: January 12, 2023
 * Author: Jamal Eddine Damir
 * Description: Composer app routing file
 * Sources:
 * Source code from class GitHub Repository
 * Instructor provided assignment specific instructions
 */

// Importing modules
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Importing components
import { ComposerListComponent } from './composer-list/composer-list.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ComposerDetailsComponent } from './composer-details/composer-details.component';

// Defining application routes
const routes: Routes = [
  {
    path: '',
    component: ComposerListComponent,
  },
  {
    path: 'composer-list',
    component: ComposerListComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'composer-details/:composerId',
    component: ComposerDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

// Exporting Router module
export class AppRoutingModule {}
