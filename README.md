# ArchiText

ArchiText is a modern AI-powered project planning app built with the MERN stack. It helps users turn ideas into structured visual plans, smart diagrams, and reusable project roadmaps.

## Summary

At its core, ArchiText makes planning faster and clearer by combining AI-assisted brainstorming with interactive diagram generation. Users can create and save projects, generate mind maps, flowcharts, timelines, and radial diagrams, and manage everything from their own dashboard. The app emphasizes a clean workflow, secure user authentication, and a responsive interface for planning on the web.

## Tech Stack

- **MongoDB**: Stores user accounts, project documents, chat history, and diagram data.
- **Express**: Provides a REST-style API and server middleware for authentication, validation, and AI routing.
- **React / Next.js**: Powers the frontend experience with server-rendered pages, dynamic route handling, and component-driven UI.
- **Node.js**: Runs the backend server and coordinates database access, authentication, and AI calls.

### Additional Tools

- **OpenAI / AI prompts**: Drives smart project planning and diagram creation.
- **JWT / token auth**: Secures user sessions and API access.
- **Custom middleware**: Handles request validation, rate limiting, and ownership checks.

## Workflow

1. **User Signup / Login**
   - Users create an account using email and password.
   - Verification and password reset flows keep accounts secure.

2. **Project Creation**
   - Users create a new project and describe its goals.
   - The server saves project details in MongoDB.

3. **AI Planning & Diagram Generation**
   - Users send prompts through the chat interface.
   - The backend forwards the prompt to the AI service and receives structured outputs.
   - Generated data is rendered as diagrams like mind maps, flowcharts, timelines, or radial charts.

4. **Save, Edit, and Review**
   - Saved projects are loaded from the database for editing.
   - Users can revisit past plans, adjust content, and continue ideation.

5. **Export & Visualize**
   - Diagram output is displayed in a responsive canvas.
   - Users can review visual plans and use the UI to navigate project details.

## Project Structure

- `client/` - Frontend app built with Next.js and React components.
- `server/` - Backend API, controllers, routes, models, and middleware.
- `client/app/` - Next.js pages, UI components, helper utilities, and diagram generators.
- `server/Controllers/` - Business logic for authentication, project management, and AI responses.
- `server/models/` - Mongoose models for users, projects, messages, and OTP flows.
- `server/routes/` - API endpoints for user auth, project actions, messaging, and AI interactions.
- `server/middleware/` - Security and request handling layers.
- `server/lib/` - Database connection and logging utilities.

## Why ArchiText?

- Built for fast idea-to-visual conversion.
- Uses the MERN stack for a scalable full-stack architecture.
- Offers secure account flows and project persistence.
- Supports multiple diagram formats in a single workspace.
- Designed to help teams and individuals move from concept to plan quickly.

## Getting Started

1. Install dependencies in both `client` and `server`.
2. Configure environment variables for MongoDB and AI access.
3. Run the server and frontend locally.
4. Open the app in a browser, sign in, and start creating projects.

---

> ArchiText is designed to make project planning more visual, more collaborative, and more intelligent by using the MERN stack and AI-powered diagram workflows.
