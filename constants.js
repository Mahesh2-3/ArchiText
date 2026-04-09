export const data = {
  techStack: {
    frontend: {
      name: "Next.js",
      reason: "Supports SSR, API routes, and fast UI development",
    },
    backend: {
      name: "Next.js API Routes",
      reason: "Simplifies architecture by combining frontend and backend",
    },
    database: {
      name: "MongoDB",
      reason: "Flexible schema for storing user habits and logs",
    },
    authentication: {
      name: "NextAuth.js",
      reason: "Easy integration with multiple providers and session handling",
    },
    stateManagement: {
      name: "Zustand",
      reason: "Lightweight and simple state management",
    },
    styling: {
      name: "Tailwind CSS",
      reason: "Fast UI development with utility-first styling",
    },
  },

  schema: [
    {
      collection: "User",
      fields: [
        { name: "id", type: "ObjectId", description: "Unique user identifier" },
        { name: "email", type: "string", description: "User email" },
        { name: "password", type: "string", description: "Hashed password" },
        {
          name: "createdAt",
          type: "Date",
          description: "Account creation time",
        },
      ],
    },
    {
      collection: "Habit",
      fields: [
        { name: "id", type: "ObjectId", description: "Unique habit ID" },
        { name: "userId", type: "ObjectId", description: "Reference to User" },
        { name: "title", type: "string", description: "Habit name" },
        {
          name: "frequency",
          type: "string",
          description: "daily/weekly/monthly",
        },
        { name: "createdAt", type: "Date", description: "Creation date" },
      ],
    },
    {
      collection: "HabitLog",
      fields: [
        { name: "id", type: "ObjectId", description: "Log ID" },
        {
          name: "habitId",
          type: "ObjectId",
          description: "Reference to Habit",
        },
        { name: "date", type: "Date", description: "Date of completion" },
        { name: "status", type: "boolean", description: "Completed or not" },
      ],
    },
  ],

  apis: [
    {
      method: "POST",
      route: "/api/auth/register",
      description: "Register new user",
    },
    {
      method: "POST",
      route: "/api/auth/login",
      description: "Authenticate user",
    },
    {
      method: "GET",
      route: "/api/habits",
      description: "Get all habits for a user",
    },
    {
      method: "POST",
      route: "/api/habits",
      description: "Create a new habit",
    },
    {
      method: "PUT",
      route: "/api/habits/:id",
      description: "Update habit details",
    },
    {
      method: "DELETE",
      route: "/api/habits/:id",
      description: "Delete a habit",
    },
    {
      method: "POST",
      route: "/api/habits/:id/log",
      description: "Mark habit as completed for a day",
    },
    {
      method: "GET",
      route: "/api/habits/:id/logs",
      description: "Get habit tracking history",
    },
  ],

  structure: {
    frontend: [
      "/app",
      "/components",
      "/features/habits",
      "/features/auth",
      "/hooks",
      "/utils",
    ],
    backend: [
      "/app/api/auth",
      "/app/api/habits",
      "/lib/db",
      "/lib/auth",
      "/services",
    ],
  },

  scaling: [
    "Implement caching using Redis for frequently accessed habit data",
    "Use pagination for fetching habit logs to reduce load",
    "Add rate limiting to prevent abuse of API endpoints",
    "Separate authentication and habit services into microservices if scaling increases",
    "Use CDN for static assets to improve frontend performance",
  ],
};
