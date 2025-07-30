# SalmonSwim Landing Page

This project is a landing page built with Angular, intended to showcase and promote AquaFit Swimming Classes.

## Key Features & Benefits

*   **Modern UI:** A clean and responsive design providing an engaging user experience.
*   **Modular Architecture:**  Built with Angular components for maintainability and scalability.
*   **Routing:** Implements Angular routing for navigating between different sections (Home, Payment).
*   **TypeScript:** Utilizes TypeScript for type safety and improved code organization.
*   **Image Gallery:**  Includes a collection of relevant images to enhance visual appeal.

## Prerequisites & Dependencies

Before you begin, ensure you have the following installed:

*   **Node.js:** (Ideally the latest LTS version) - [https://nodejs.org/](https://nodejs.org/)
*   **npm:** (Usually installed with Node.js) - [https://www.npmjs.com/](https://www.npmjs.com/)
*   **Angular CLI:** (For running Angular commands) - Install globally using `npm install -g @angular/cli`

## Installation & Setup Instructions

Follow these steps to set up the project locally:

1.  **Clone the Repository:**

    ```bash
    git clone https://github.com/Moon3301/landing-page-salmonswim.git
    cd landing-page-salmonswim
    ```

2.  **Install Dependencies:**

    ```bash
    npm install
    ```

3.  **Start the Development Server:**

    ```bash
    ng serve
    ```

    This will compile the application and start a local development server.  Open your browser and navigate to `http://localhost:4200/` (or the address indicated in the console) to view the landing page.

## Usage Examples & API Documentation

This project is a landing page and doesn't contain a formal API.  However, here's how the routing is structured:

*   **Home Page:** The default route (`/`) loads the `HomeModule`.
*   **Payment Page:** The `/payment` route loads the `PaymentModule`.

Example Navigation (within the Angular application):

```typescript
// Navigate to the payment page
import { Router } from '@angular/router';

constructor(private router: Router) {}

goToPayment() {
  this.router.navigate(['/payment']);
}
```

## Configuration Options

The project utilizes Angular's environment files for configuration.  You can find these files in `src/environments`:

*   `src/environments/environment.ts` (for development)
*   `src/environments/environments.prod.ts` (for production)

Modify these files to configure settings such as API endpoints, environment variables, etc. For instance,

```typescript
// src/environments/environment.ts
export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000/api' // Example API URL
};
```

## Contributing Guidelines

We welcome contributions to this project!  Please follow these guidelines:

1.  **Fork the Repository:**  Create your own fork of the repository.
2.  **Create a Branch:**  Create a new branch for your feature or bug fix.
3.  **Make Changes:**  Implement your changes, ensuring the code adheres to the project's style and conventions.
4.  **Test Your Changes:**  Test your changes thoroughly.
5.  **Submit a Pull Request:**  Submit a pull request to the main repository.

## License Information

License not specified. All rights reserved to the owner (Moon3301).

## Acknowledgments

*   This project utilizes the Angular framework.
