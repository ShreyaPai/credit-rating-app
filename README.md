# Ratings App

A full-stack web application for viewing issuer credit ratings, searching issuers, viewing rating details and submitting feedback.

## Features

### Frontend
- Built with Angular and TypeScript.
- Issuer listing with search functionality.
- Debounced search to reduce unnecessary filtering or API calls.
- Issuer details view with rating drivers and AI insights.
- Feedback submission form with input validation.
- Loading spinners during API requests.
- Success and error notifications using snack bars.
- Unknown-route handling with redirection to the dashboard and notification.
- TypeScript interfaces for API requests and responses.

### Backend
- REST APIs built with Node.js, Express and TypeScript.
- Layered architecture separating routes, controllers, services and repositories.
- Input validation for feedback submissions.
- Centralized error-handling middleware.
- Custom application errors with HTTP status codes.
- Consistent API error responses.

## Tech Stack

**Frontend**
- Angular
- TypeScript
- Angular Material
- RxJS

**Backend**
- Node.js
- Express
- TypeScript
- REST APIs

## Architecture

The application separates the frontend and backend responsibilities.

### Frontend flow

Angular Components → Services → Backend REST APIs

Components handle UI interactions, while services handle API communication and loading/error states.

### Backend flow

Routes → Controllers → Services → Repositories → Data

- **Routes:** Map HTTP endpoints to controller methods.
- **Controllers:** Handle HTTP requests and responses.
- **Services:** Contain business logic and input validation.
- **Repositories:** Handle data retrieval and persistence.
- **Error middleware:** Converts forwarded errors into consistent HTTP responses.

## Error Handling

The backend uses a custom `AppError` class to associate application errors with HTTP status codes.

Examples:
- `400 Bad Request` — invalid input.
- `404 Not Found` — issuer not found.
- `500 Internal Server Error` — unexpected server errors.

The Angular frontend displays appropriate success and error notifications and manages loading indicators during API requests.

## Getting Started

### Prerequisites
- Node.js and npm
- Angular CLI
- Git

### 1. Clone the repository

```bash
git clone <repository-url>
cd <repository-folder>
```

### 2. Start the backend

Navigate to the backend directory:

```bash
cd backend
npm install
```

Configure the required environment variables, if any, and start the server using the script defined in `package.json`.

For example, if the project uses `npm run dev`:

```bash
npm run dev
```

### 3. Start the frontend

Open another terminal and navigate to the Angular application directory:

```bash
cd frontend
npm install
ng serve
```

Open the local URL printed by Angular CLI, usually `http://localhost:4200`.

> Adjust the directory names and commands to match the actual repository structure and `package.json` scripts.

## API Endpoints

Update the endpoint paths below to match the implemented routes.

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/issuers` | Retrieve the issuer listing |
| GET | `/api/issuers/:id` | Retrieve issuer details |
| POST | `/api/feedback` | Submit feedback |

## Validation and Testing

The application validates feedback input, including:
- Name length.
- Email format.
- Rating range of 1–5.
- Comment length.
- Issuer ID presence and validity.
