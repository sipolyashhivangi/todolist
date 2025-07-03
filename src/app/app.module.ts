// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Import BrowserAnimationsModule
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { TodoModule } from './todo/todo.module'; // Import your feature module

// Angular Material Modules
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card'; // <--- Ensure this is imported for LandingPageComponent
import { MatNativeDateModule } from '@angular/material/core'; // For datepicker functionality
import { MatMenuModule } from '@angular/material/menu'; 

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, // Add BrowserAnimationsModule here
    AppRoutingModule,
    TodoModule, // Import your Todo feature module

    // Material Modules used across the app or in App-level components
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule, // Add MatCardModule here
    MatNativeDateModule, // Needed if you use mat-datepicker (though typically in TodoModule)
   MatMenuModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }