 # Reddit Clone

A modern Reddit clone built with React, TypeScript, Clerk Authentication, and Convex backend. This project implements core Reddit features including subreddit creation, post submission, commenting, and voting functionality.

## Technology Stack

- **Frontend**: React + TypeScript
- **Authentication**: Clerk
- **Backend**: Convex
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **State Management**: React Hooks + Context
- **Testing**: Jest + React Testing Library

## Prerequisites

Before you begin, ensure you have installed:
- Node.js (v16 or higher)
- npm (v7 or higher)
- A Clerk account for authentication
- A Convex account for backend services

## Environment Setup

1. Clone the repository:
```bash
git clone [your-repository-url]
cd reddit-clone
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the project root:
```env
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
VITE_CONVEX_URL=your_convex_deployment_url
```

4. Set up Convex:
```bash
npx convex dev
```

## Project Structure

```
reddit-clone/
├── src/
│   ├── components/     # Reusable UI components
│   ├── pages/         # Page components
│   ├── hooks/         # Custom React hooks
│   ├── lib/           # Utilities and configurations
│   ├── styles/        # Global styles and Tailwind config
│   └── types/         # TypeScript type definitions
├── convex/            # Convex backend functions
├── public/            # Static assets
└── __tests__/        # Test files
```

## Features

- User authentication with Clerk
- Subreddit creation and management
- Post creation with rich text support
- Commenting system
- Upvoting/downvoting functionality
- Real-time updates
- Responsive design
- Dark mode support

## Development

Start the development server:
```bash
npm run dev
```

Run tests:
```bash
npm test
```

Build for production:
```bash
npm run build
```

## Testing

We implement test-driven development practices using Jest and React Testing Library. To run tests:

```bash
# Run all tests
npm test

# Run tests in watch mode
npm test -- --watch

# Run tests with coverage
npm test -- --coverage
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
