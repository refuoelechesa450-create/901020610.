# Community Library Management System

A React application for a community library. Librarians can manage books and members, update stock, record loans and returns, and review transaction history. The application stores its data in the browser's local storage.

## Features

- Dashboard with book counts, available copies, issued copies, members, and low-stock alerts
- Add, edit, search, filter, and delete books
- Record new stock arrivals
- Register, update, and delete library members with membership IDs and roles
- Issue and return books, with a transaction history
- Login screen and navigation between dashboard, books, transactions, and members
- Responsive layout for smaller screens

## Requirements

- Node.js and npm

## Run locally

1. Open a terminal in the project folder.
2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open the local URL printed in the terminal.

## Run directly from HTML

1. Build the standalone HTML file:

   ```bash
   npm run build
   ```

2. Open the project-root `index.html` in a browser. No local server is required.

## First-time login

On first launch, create your own name or username and password in the app. Those details are saved in the current browser and used for future logins.

This is a classroom demonstration login. App data is stored in the current browser and is not shared between users or devices.

## Scripts

- `npm run dev` - start the local development server
- `npm run lint` - check the source code with ESLint
- `npm run build` - create a production build
- `npm run preview` - preview the production build locally

## Technology

React, React Router, Vite, and CSS.
