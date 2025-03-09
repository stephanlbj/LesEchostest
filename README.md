# Newsletter Page - Frontend Challenge

# Introduction

This repository contains the implementation of the Newsletter Page for Les Echos. It was built as part of the frontend evaluation challenge. The goal was to create a responsive newsletter page, with different features based on user subscription status, using modern technologies such as Next.js, TypeScript, Styled-Components, React Testing Library, TanStack Query, and Jest.

# Features

Responsive design: The page adjusts to different screen sizes, ensuring a smooth user experience across devices.

User subscription management: The page adapts according to the user’s subscription status, providing access or subscription prompts based on the user's active subscriptions.

Grouped newsletters: Newsletters are displayed grouped by their respective sites.
Dynamic CTA button: The "Call to Action" button changes its label based on the user's subscription status.

SSR support: The app works with Server-Side Rendering (SSR) in Next.js, fetching newsletter data on the server using server component.

 💻⚙️ Technologies Used

Next.js (App Router): Framework used to build the app. We use the latest version of Next.js to handle routing and server-side rendering.

TypeScript: Static typing for better tooling, code quality, and maintainability.
Styled-Components: CSS-in-JS library to style the components. It allows us to write scoped CSS directly inside the component.

React Testing Library: Tool to test React components by simulating user interactions and ensuring the page behaves as expected.

Jest: JavaScript testing framework for running tests and mocking APIs.

TanStack Query (React Query): A data-fetching and caching library that simplifies the process of handling asynchronous data in React.

🚧 Project Structure
src/: The source code for the project.
components/: Contains all React components (e.g., NewsletterItem, NewsletterList).

mocks/: Mock data files for users and newsletters (e.g., user.ts, newsletters.ts).

app/: Contains the main pages and routing logic for Next.js.

types/: Contains TypeScript interfaces for better typing and code safety.

utils/: Utility functions for various tasks like checking subscription access.

# The tests are close to the functions and code they are meant to test. #

  # Installation 🛠️⚙️

1. Clone the Repository

git clone orgin https://github.com/stephanlbj/-LesEchos.git

cd dir

2. Install Dependencies
Make sure you have Node.js (preferably the latest LTS version) installed. Run the following command to install all dependencies:

npm install

3. Run the Development Server
Once all dependencies are installed, you can start the Next.js development server:

npm run dev
This will start the server at http://localhost:3000. Open the page in your browser to see the app in action.

4. Running Tests
To ensure that everything is working as expected, you can run the tests using Jest and React Testing Library.

npm test
Or if you want to run the tests in watch mode:

npm run test:watch
This will run the test suite and display the results in the terminal.
 

Thought Process and Next Steps
Given more time, I would:

Improve accessibility: Ensure that all interactive elements are accessible (e.g., using ARIA attributes).
Performance optimization: Further optimize the application’s performance, especially for larger datasets.
Complete tests: Expand the test coverage, particularly for edge cases and user interaction simulations.
Integration with an actual API: Replace the mock data fetching with real API calls and integrate it with the backend for dynamic content.
