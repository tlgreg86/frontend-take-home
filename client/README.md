# Frontend Take-Home Project

This is the frontend portion of the WorkOS take home assessment, built with React and TypeScript. It uses `react-query` for data fetching and caching, and Radix UI for styling and components.

---

## Running the Project

### Prerequisites
- Node.js (v16 or later)
- npm

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/tlgreg86/frontend-take-home.git
   cd frontend-take-home/client
   ```

2. Install client dependencies:
   ```bash
   cd client
   npm install
   ```

3. Install server dependencies:
   ```bash
   cd server
   npm install
   ```

### Running the Development Server
1. Start the api server:
   ```bash
   npm run api
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

2. Open your browser and navigate to:
   ```
   http://localhost:5173
   ```

---

## Project Approach

### 1. Component-Based Architecture
- The project is structured into reusable and modular components to ensure maintainability and scalability.
- Components are divided into feature-specific directories (e.g., `UsersTab`, `RolesTab`) and shared components (e.g., `PaginationRow`, `TableSkeletonLoader`).

### 2. State Management
- Used `react-query` for efficient data fetching, caching, and synchronization with the server.
- Local component state is managed using React's `useState` and `useEffect` hooks for UI interactions like dialogs and search inputs.

### 3. Styling
- Radix UI is used for quick, consistent, and accessible styling.
- Custom styles are applied where necessary to fill in gaps and enhance the user experience.

### 4. API Integration
- API hooks (e.g., `useFetchUsers`, `useFetchRoles`) are implemented using `react-query` to handle data fetching and caching.
- Query keys are used to ensure efficient cache invalidation and refetching.

---

## Future Improvements

### 1. Error Handling
- Add global error boundaries to catch and display user-friendly error messages.
- Implement retry mechanisms for transient API errors.

### 2. Accessibility
- Ensure all components are fully accessible:
  - Add `aria-label` attributes to all interactive elements.
  - Improve keyboard navigation for dialogs, dropdowns, and tables.

### 3. Testing
- Add unit tests for critical components and hooks using `Jest` or `React Testing Library`.
- Write integration tests for end-to-end flows like searching, pagination, and user creation.

### 4. Optimistic Updates
- Implement optimistic updates for actions like creating, editing, or deleting users/roles to improve perceived performance.

### 5. Animations
- Add subtle animations for loading states, button interactions, and tab transitions to enhance the user experience.

### 6. Code Splitting
- Implement code splitting and lazy loading for components like `UsersTab` and `RolesTab` to improve initial load times.

### 4. Improved feedback
- Implement a form of feedback indicating a request completed successfully or otherwise using RadixToast.

---

## What I Would Do Differently If I Had More Time

### 1. Refactor Components
- Further modularize components to reduce duplication (e.g., combine `UsersTable` and `RolesTable` into a generic `Table` component).
- Create a reusable form component for dialogs like `AddUserDialog` and `AddRoleDialog`.

### 2. Improve API Integration
- Use environment variables for API URLs to make the app more configurable.
- Add better handling for paginated API responses (e.g., showing total pages or items).

### 3. Tests
- As mentioned in "Future Improvements", I would like to have added tests for everything as I went, ensuring components worked as expected over time.

### 4. Enhance Developer Experience
- Add detailed documentation for API hooks and components.
- Set up a pre-commit hook with `ESLint` and `Prettier` to enforce consistent code formatting.

### 5. Improve caching and cache invalidation
- Update mutations to only invalidate query tags for the specific users/roles that were updated rather than invalidate the entire list each time.
---

Thanks for allowing me the opportunity to participate in this assignment! I really enjoyed the challenge and it was great getting to work with the Radix UI library.
