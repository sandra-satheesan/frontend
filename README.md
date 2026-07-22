# My OS Frontend

A React-based dashboard for tracking jobs, coding practice, workouts, and personal profile information. The app uses a dark, modern UI and connects to a backend API for saving and retrieving user data.

## Features

- Job tracker for managing applications and statuses
- LeetCode tracker for logging solved problems and notes
- Gym tracker for workout progress
- Profile page for personal stats
- Login and registration flow with protected routes

## Tech Stack

- React
- React Router DOM
- Tailwind CSS
- Axios
- Create React App

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm start
   ```

3. Open http://localhost:3000 in your browser.

## Available Scripts

- `npm start` - runs the app in development mode
- `npm run build` - builds the app for production
- `npm test` - launches the test runner

## API Configuration

The frontend expects the backend API to be available at:

```text
http://localhost:8000/api
```

Make sure your backend server is running if you want to create or view tracked data.
