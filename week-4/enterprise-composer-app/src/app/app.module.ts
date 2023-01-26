/**
 * Title: app.module.ts
 * Date: January 12, 2023
 * Author: Jamal Eddine Damir
 * Description: App module
 * Sources:
 * Source code from class GitHub Repository
 * Instructor provided assignment specific instructions
 */

// Importing modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// Import Components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComposerListComponent } from './composer-list/composer-list.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ComposerDetailsComponent } from './composer-details/composer-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ComposerListComponent,
    ContactComponent,
    AboutComponent,
    ComposerDetailsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
