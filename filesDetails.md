ArchiText is a full-stack web application built to help anyone plan and design projects easily. It uses AI to automatically create project blueprints, outlines, and visual diagrams.

After signing in, users can create projects, chat with an AI assistant to generate project structures, and view or edit their project plans.

## Client (`client/app`)

### Pages & Main Layout
 - `/layout.jsx` (Main page template that sets up the overall layout, notifications, and screen theme)
 - `/page.jsx` (Welcome landing page that introduces the app and shows sample project map previews)
 - `/globals.css` (Main styling file controlling colors, fonts, visual effects, and light/dark theme styles)
 - `/home/page.js` (Main dashboard where users view project diagrams, use the sidebar, and chat with AI)
 - `/login/page.jsx` (Sign-in page where users enter their email and password)
 - `/register/page.jsx` (Sign-up page where new users create an account and verify their email with a code)
 - `/forgot-password/page.jsx` (Page to request a password reset code sent to the user's email)
 - `/reset-password/page.jsx` (Page where users enter their verification code to set a new password)
 - `/settings/page.js` (Main settings menu showing account management options)
 - `/settings/profile/page.js` (Profile page where users can update their name or change their password)
 - `/settings/history/page.js` (History page showing past projects with an option to remove them)
 - `/settings/privacy-policy/page.js` (Page showing the privacy policy rules)
 - `/settings/terms-and-conditions/page.js` (Page showing the terms of service agreement)

### API Client Layer (`client/app/api`)
 - `/Architecture.js` (Asks the server to load the project structure and diagram details)
 - `/Auth.js` (Sends login, sign-up, log-out, and password reset requests to the server)
 - `/Messages.js` (Sends user messages to the AI and loads past chat history from the server)
 - `/Project.js` (Creates new projects, loads saved projects, gets history, and deletes projects)
 - `/User.js` (Handles requests to update user profiles, change passwords, and delete account data)
 - `/utils.js` (Helper that attaches the user's secure login token to server requests)

### UI Components (`client/app/Components`)
 - `/Background.jsx` (Draws the animated background patterns and grid lines behind the app)
 - `/CreateProject.jsx` (Pop-up window for starting a new project with a name and description)
 - `/ErrorBoundary.jsx` (Catches screen display errors and displays a friendly message if something breaks)
 - `/MapPreviews.jsx` (Cards showing preview pictures of different diagram styles)
 - `/MessageCard.jsx` (Chat bubble displaying user questions and AI answers)
 - `/MindMapLabels.jsx` (Labels and buttons displayed around the diagram canvas)
 - `/ThemeButton.jsx` (Button to switch between light mode and dark mode)
 - `/ThemeDropDown.jsx` (Dropdown menu to choose between light and dark display modes)

### Helpers & Utilities (`client/app/Helpers`)
 - `/flowchartGenerator.jsx` (Turns project steps into boxes and arrows for a flowchart view)
 - `/flowchartLayout.js` (Calculates position and spacing for boxes in a flowchart diagram)
 - `/mindmapGenerator.jsx` (Turns project details into connected branch boxes for a mind map view)
 - `/mindmapLayout.js` (Calculates the positions of branches and sub-topics in a mind map)
 - `/radialGenerator.jsx` (Turns project ideas into a circular chart view)
 - `/radialLayout.js` (Calculates positions for items arranged in a circular chart)
 - `/timelineGenerator.jsx` (Turns project milestones into a step-by-step roadmap timeline)
 - `/timelineLayout.js` (Calculates line spacing for timeline milestone cards)
 - `/getPasswordStrength.jsx` (Checks how strong and secure a user's chosen password is)
 - `/icons.jsx` (Collection of icons used across buttons and menus in the app)
 - `/toast.jsx` (Settings for pop-up notification messages that confirm actions or display errors)

### Providers (`client/app/Providers`)
 - `/ThemeProvider.jsx` (Remembers whether the user selected light or dark mode across the app)

### Skeletons (`client/app/Skeletons`)
 - `/ProjectSkeleton.jsx` (Loading placeholder graphics shown while project lists are downloading)

### Global State Management (`client/app/store`)
 - `/useAppStore.jsx` (Central memory holding user details, active project, and diagram data)
 - `/useThemeStore.jsx` (Memory holding light or dark mode display preferences)

### Core Interfaces (`client/app/ui`)
 - `/Conversation.jsx` (Chat window where users talk with AI to design and modify their project plan)
 - `/MindMap.jsx` (Interactive canvas for viewing, moving, and saving diagrams as image or PDF files)
 - `/Sidebar.jsx` (Side navigation menu displaying the user's name, saved projects list, and main links)

---

## Server (`server`)

### Core Server Files
 - `/main.js` (Main engine of the backend server that receives requests and coordinates all server tasks)
 - `/Dockerfile` (Configuration file for packaging the server into a standard container format)
 - `/package.json` (List of third-party tools and packages needed to run the server)
 - `/babel.config.cjs` (Configuration file for processing JavaScript code)
 - `/jest.config.json` (Settings file for running automated tests on the server code)
 - `/vercel.json` (Configuration file for publishing the server online)
 - `/README.md` (Setup guide for installing and running the server on a computer)

### Controllers (`server/Controllers`)
 - `/Auth.js` (Handles account actions like signing up, email verification codes, logging in, and resetting passwords)
 - `/Message.js` (Saves chat messages and asks the AI assistant to create or update project blueprints)
 - `/Project.js` (Handles creating new projects, fetching saved projects, and removing projects)
 - `/User.js` (Handles updating user profiles, changing passwords, and deleting account data)

### API Routes (`server/routes`)
 - `/aiResponse.js` (Server web address for sending messages to the AI assistant)
 - `/messages.js` (Server web address for loading saved chat history for a project)
 - `/projects.js` (Server web addresses for creating, listing, viewing, and deleting projects)
 - `/user.js` (Server web addresses for managing user profile details and settings)
 - `/auth/login.js` (Server web address for logging in and receiving a login cookie)
 - `/auth/logout.js` (Server web address for logging out and clearing the login cookie)
 - `/auth/Register.js` (Server web address for creating a new user account)
 - `/auth/sendRegisterOtp.js` (Server web address for sending a verification code to a new user's email)
 - `/auth/forgotPassword.js` (Server web address for sending a password recovery code to email)
 - `/auth/resetPassword.js` (Server web address for setting a new password using a verification code)

### Database Models (`server/models`)
 - `/Message.js` (Database layout for storing chat questions and AI responses)
 - `/Otp.js` (Database layout for storing temporary email verification codes)
 - `/Project.js` (Database layout for storing project names, descriptions, and diagram structures)
 - `/User.js` (Database layout for storing user accounts, email addresses, and passwords)

### Middleware (`server/middleware`)
 - `/auth.js` (Security guard that checks if a user is logged in before letting them view private pages)
 - `/checkOwnership.js` (Security guard that ensures users can only view or edit their own projects)
 - `/rateLimit.js` (Protection guard that stops users from sending too many requests too quickly)
 - `/validation.js` (Checker that makes sure information entered by users is filled out correctly)

### Services & Prompt Templates
 - `/services/groq.js` (Connector service that communicates with the AI service to generate project blueprints)
 - `/prompts/decider.js` (Instructions for the AI to pick the best diagram style for a project)
 - `/prompts/tree.js` (Instructions for the AI to generate tree-style mind maps)
 - `/prompts/flowchart.js` (Instructions for the AI to generate step-by-step flowcharts)
 - `/prompts/radial.js` (Instructions for the AI to generate circular mind maps)
 - `/prompts/timeline.js` (Instructions for the AI to generate roadmap timelines)

### Utilities & Database (`server/lib`)
 - `/lib/db.js` (Connects the server to the database where all project and user information is saved)
 - `/lib/logger.js` (Records server activity logs and error reports to keep track of system health)
 - `/lib/swagger.js` (Generates an easy-to-read web page listing all server web addresses)

### Test Suite (`server/__tests__`)
 - `/__tests__/auth.test.js` (Automated checks ensuring login and account creation work as expected)
 - `/__tests__/setup.js` (Sets up a test database environment before running checks)