## Project Overview

The application is designed as a simple To-Do list, allowing users to manage their tasks. It features two main screens: a Welcome Screen and a To-Do List screen, with navigation handled by Angular routing. The To-Do data is intended to be stored in local storage for persistence.

## Live Project Links

You can view the live deployed versions of this project at the following links:

* **Surge.sh Link:** [https://1751317960330-internal-behavior.surge.sh/](https://1751317960330-internal-behavior.surge.sh/)
* **Vercel Link:** [https://todolist-git-main-sipolyashhivangis-projects.vercel.app/](https://todolist-git-main-sipolyashhivangis-projects.vercel.app/)

## Implemented Functionality

Based on the provided descriptions and screenshots, the following functionalities have been successfully implemented:

* **Welcome Screen (landing-page component):**
    * Displays welcome text (implied by the "Take me to - To do" link).
    * Includes a "Start" button (labeled "Take me to - To do") that navigates the user to the To-Do List page.

* **To-Do List Screen (todo-list component):**
    * **Display of To-Dos:** Lists to-do items, categorized into "To do" and "Done" sections.
    * **Add To-Do Functionality:**
        * An "Add Todo" button is present, which opens a form for adding new tasks.
        * The form allows users to input a "Task Name" (description), "Task Description" (additional detail), and a "Due Date."
        * Tasks can be marked as completed using a checkbox.
    * **Mark as Done:** Users can mark tasks as complete, moving them to the "Done" section.

* **Component Structure & Routing:**
    * The application is well-structured with separate components for the landing page (landing-page), the main To-Do module (todo), and sub-components for the To-Do form (todo-form) and list display (todo-list).
    * Angular routing is correctly set up, allowing navigation between the Welcome Screen and the To-Do List.

## Project Structure

```

todolist/
├── src/
│   ├── app/
│   │   ├── app-routing.module.ts           // Defines main application routes and lazy-loaded modules.
│   │   ├── app.component.html              // Main HTML template for the root component.
│   │   ├── app.component.scss              // Styles specific to the root component.
│   │   ├── app.component.ts                // TypeScript logic for the root application component.
│   │   ├── app.module.ts                   // Root module, bootstraps the application and declares core elements.
│   │   ├── todo-service.service.ts         // Service for todo item business logic and data handling.
│   │   ├── landing-page/
│   │   │   ├── landing-page.component.html // HTML template for the landing page.
│   │   │   └── landing-page.component.ts   // TypeScript logic for the landing page component.
│   │   └── todo/
│   │       ├── todo-module-routing.ts      // Defines routes specific to the 'todo' feature module.
│   │       ├── todo.module.ts              // Feature module for 'todo' functionality.
│   │       ├── todo-form/
│   │       │   ├── todo-form.component.html// HTML template for the todo creation/editing form.
│   │       │   └── todo-form.component.ts  // TypeScript logic for the todo form component.
│   │       └── todo-list/
│   │           ├── todo-list.component.html// HTML template for displaying the list of todos.
│   │           └── todo-list.component.ts  // TypeScript logic for the todo list component.
│   ├── assets/                             // Stores static assets like images and icons.
│   ├── environments/
│   │   ├── environment.prod.ts             // Configuration for production build.
│   │   └── environment.ts                  // Configuration for development build.
│   ├── index.html                          // Main HTML entry point for the Angular application.
│   ├── main.ts                             // Primary entry point, bootstraps the root module.
│   └── styles.scss                         // Global styles applied across the application.

```
# How to Run This Project

Follow these steps to set up and run the Angular To-Do List application on your local machine:

1.  **Clone the Repository:**
    Open your terminal or command prompt and run the following command to clone the project:
    ```bash
    git clone https://github.com/sipolyashhivangi/todolist.git
    ```

2.  **Navigate to the Project Directory:**
    Change into the newly cloned project directory:
    ```bash
    cd todolist
    ```

3.  **Install Dependencies:**
    Install all the necessary Node.js packages and Angular dependencies. This might take a few minutes.
    ```bash
    npm i
    ```

4.  **Run the Application:**
    Once the dependencies are installed, you can start the Angular development server:
    ```bash
    ng serve
    ```

5.  **Open in Browser:**
    After the compilation is complete, open your web browser and navigate to `http://localhost:4200/`.

# Project Dependencies

This section outlines the key external libraries and tools required for the Angular To-Do List application.

## Dependencies (Runtime)

These packages are essential for the application to run in a production environment:

* `@angular/animations`
* `@angular/cdk`
* `@angular/common`
* `@angular/compiler`
* `@angular/core`
* `@angular/forms`
* `@angular/material`
* `@angular/platform-browser`
* `@angular/platform-browser-dynamic`
* `@angular/router`
* `rxjs`
* `tslib`
* `zone.js`

## Development Dependencies (Build & Test)

These packages are used during the development, building, and testing phases:

* `@angular-devkit/build-angular`
* `@angular/cli`
* `@angular/compiler-cli`
* `@types/jasmine`
* `@types/node`
* `jasmine-core`
* `karma`
* `karma-chrome-launcher`
* `karma-coverage`
* `karma-jasmine`
* `karma-jasmine-html-reporter`
* `typescript`
