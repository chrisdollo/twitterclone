# Hellacious - Social Journaling Platform

A React-based social media application that allows users to share journal entries and experiences with a community. Originally conceived as a Twitter clone, Hellacious focuses on creating a platform for users to document and share their daily adventures and thoughts.

## Overview

Hellacious is a social journaling platform where users can:
- Create an account and authenticate securely
- Share journal entries with the community
- View a feed of journal entries from other users
- Engage with a clean, modern interface built with React

## Tech Stack

### Frontend
- **React 19.1.0** - Modern UI library with hooks
- **Vite 7.0.4** - Fast build tool and development server
- **React Router DOM 7.7.1** - Client-side routing for navigation between pages
- **CSS** - Custom styling for components

### Authentication
- **Firebase Authentication** - Email/password-based user authentication
- Firebase SDK 12.0.0 integrated for secure user management

### Planned Backend (In Development)
- **Flask** - Python web framework for API endpoints
- **MongoDB** - NoSQL database for storing user data and journal entries
- **Amazon S3** - Media storage for profile pictures and attachments

## Project Structure

```
hellacious/
├── frontend/                   # React frontend application
│   ├── src/
│   │   ├── components/        # Reusable UI components
│   │   │   ├── Top/          # Header component with app name
│   │   │   ├── Feed/         # Feed container displaying journal entries
│   │   │   ├── JournalEntry/ # Individual journal entry card component
│   │   │   └── Pages/        # Page-level components
│   │   │       ├── WelcomeUserPage/  # Landing page
│   │   │       ├── LogInPage/        # User login form
│   │   │       └── SignUpPage/       # User registration form
│   │   ├── App.jsx           # Main application component
│   │   ├── main.jsx          # Application entry point
│   │   └── index.css         # Global styles
│   ├── index.html            # HTML template
│   ├── vite.config.js        # Vite configuration
│   └── package.json          # Frontend dependencies
│
├── auth/                      # Authentication configuration
│   └── firebase.js           # Firebase initialization and auth setup
│
├── backend/                   # Backend API (planned/in development)
│   ├── db/                   # Database models and helpers
│   └── dummy.py              # Placeholder file
│
├── package.json              # Root dependencies
└── README.md                 # This file
```

## Components

### Pages

#### WelcomeUserPage (`frontend/src/components/Pages/WelcomeUserPage/WecomeUserPage.jsx`)
- Landing page that greets users
- Contains navigation links to Sign Up and Login pages
- Uses React Router for client-side routing
- Displays introductory content about the platform

#### SignUpPage (`frontend/src/components/Pages/SIgnUpPage/SignUpPage.jsx`)
- User registration form
- Fields: Email and Password
- Integrates with Firebase Authentication using `createUserWithEmailAndPassword`
- Handles sign-up errors and user feedback

#### LogInPage (`frontend/src/components/Pages/LogInPage/LogInPage.jsx`)
- User authentication form
- Fields: Email and Password
- Uses Firebase `signInWithEmailAndPassword` for authentication
- Displays success message upon successful login
- Error handling for invalid credentials

### Components

#### Top (`frontend/src/components/Top/Top.jsx`)
- Simple header component
- Displays the "Hellacious" brand name
- Styled with custom CSS for consistent branding

#### Feed (`frontend/src/components/Feed/Feed.jsx`)
- Container component for displaying multiple journal entries
- Renders a list of `JournalEntry` components
- Designed to scroll through user-generated content

#### JournalEntry (`frontend/src/components/JournalEntry/JournalEntry.jsx`)
- Individual journal entry card component
- Displays:
  - User profile picture
  - Username and handle
  - Journal entry text content
- Styled similar to social media posts for familiarity

## Authentication System

The app uses Firebase Authentication for secure user management:

- **Configuration**: Located in `auth/firebase.js`
- **Authentication Methods**: Email/Password
- **Firebase Project**: social-media-app-7bf31
- **Features**:
  - User registration with email validation
  - Secure password handling
  - Session management
  - Error handling for common auth issues

## Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn package manager
- Firebase account (for authentication)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/chrisdollo/twitterclone.git
cd hellacious
```

2. Install root dependencies:
```bash
npm install
```

3. Install frontend dependencies:
```bash
cd frontend
npm install
```

### Running the Application

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to:
```
http://localhost:5173
```

The app will automatically reload when you make changes to the source code.

### Available Scripts

In the `frontend` directory:

- `npm run dev` - Starts the Vite development server
- `npm run build` - Creates an optimized production build
- `npm run preview` - Previews the production build locally
- `npm run lint` - Runs ESLint to check code quality

## Current Development Status

### Completed Features
- React frontend structure with Vite
- Firebase authentication integration
- User registration and login pages
- Welcome/landing page
- Feed and journal entry components
- Basic routing with React Router
- Component-based architecture

### In Development
- Backend API with Flask
- MongoDB database integration
- Media storage with Amazon S3
- User profile management
- Creating and posting journal entries
- Real-time feed updates
- User interactions (likes, comments)

## Future Enhancements

Based on the research documentation, planned features include:
- Full backend API implementation
- Database integration for persistent storage
- User profiles with customizable information
- Media upload capabilities
- Enhanced journal entry features
- User feed personalization
- Search and discovery features
- Real-time notifications

## Contributing

This is a personal project currently in development. Feel free to fork and experiment!

## License

ISC

## Author

Chris Dollo

## Repository

GitHub: https://github.com/chrisdollo/twitterclone
