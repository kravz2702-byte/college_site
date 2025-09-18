# College Site

This project is a React rewrite of the original static college website. The application is built with [Vite](https://vitejs.dev/), React 18 and React Router to provide a multi-page experience with client-side routing.

## Getting started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npm run dev
   ```

   The site will be available at the URL shown in the terminal.

3. Create a production build:

   ```bash
   npm run build
   ```

   The optimized files will be generated inside the `dist` directory.

## Project structure

```
├── public/           # Static assets served as-is
├── src/
│   ├── components/   # Shared UI components
│   ├── data/         # Content shared across pages
│   ├── pages/        # Route-level React components
│   ├── App.jsx       # Application routes
│   └── main.jsx      # Application entry point
├── index.html        # Vite HTML entry file
└── vite.config.js    # Vite configuration
```

## Available pages

- Home (`/`)
- About (`/about`)
- Courses (`/course`)
- Blog (`/blog`)
- Contact (`/contact`)

Each page reuses the same navigation menu and footer while providing page-specific content derived from the original static layout.
