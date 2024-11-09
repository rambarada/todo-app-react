# todo-app-react
Todo tasks App built with react ts +vite 

TaskMaster: A To-Do List App

TaskMaster is a React-based to-do list application that helps users manage their tasks efficiently with features like setting task statuses, scheduling with start and end times, and handling due dates. The app is designed to showcase various modern React features and concepts, making it a helpful project for understanding how to build complex React applications.

Features

Task Management: Users can add, edit, and delete tasks with detailed information, including titles, statuses, due dates, and start and end times.

Routing: The app uses react-router-dom for navigation between different views, such as the task list, task creation, and task editing.

Form Handling: Task forms are managed using react-hook-form for efficient and validated input collection.

Local Storage: Tasks are stored in the browser’s local storage to persist data across page reloads.

Dialog for Confirmation: Uses Material UI's Dialog component to confirm task deletions.

Status Management: Tasks have a status (Incomplete, Complete, In Progress), each represented visually with icons and colors.

Responsive Design: The app uses Tailwind CSS to ensure a responsive and clean user interface.

Modern UI Components: Utilizes Material UI components for a polished look and feel.

Key React Concepts Used

1. React Components
Functional Components: The app is structured using functional components for easier readability and modern React practices.
Component Reusability: Components like TodoForm, TodoList, and TodoWrapper are created to promote code reuse.

2. State Management
useState Hook: Manages the state of the task list and handles open/close states for the confirmation dialog.
Local State for Form Handling: The useForm hook from react-hook-form is used for form control and validation.

3. Effect Hook (useEffect)
Data Preloading: Uses useEffect to preload task data into the form when editing an existing task.

4. React Router
createBrowserRouter: Sets up routes using react-router-dom to enable navigation between task views.
Nested Routes: Implements nested routing to manage paths like /tasks, /tasks/new, and /tasks/:id.

5. Data Validation
React Hook Form: Utilizes react-hook-form for efficient form management, validation, and submission handling.
Form Validation: Built-in validation ensures that all fields are completed before submission.

6. Material UI Integration
UI Components: Incorporates Material UI's Button, Dialog, IconButton, TextField, Select, and other components to create an intuitive user interface.
Tooltip and Icons: Enhances user interaction with tooltips and icons from Material UI.

7. Tailwind CSS for Styling
Utility-First CSS Framework: Applies Tailwind CSS for modern and responsive design.
Custom Styling: Combines Tailwind with Material UI for a cohesive and attractive layout.

8. Local Storage for Persistence
Task Data Storage: Stores tasks in local storage to maintain task information across page reloads.

9. Dialog Handling
Material UI Dialog: Uses the Dialog component to handle task deletion confirmation, enhancing the user experience.

Getting Started
To run the app locally, follow these steps:

Clone the repository:

git clone https://github.com/your-repo/todolist-app.git

Navigate to the project directory:

cd todolist-app

Install dependencies:

npm install
Start the app:

npm start

Open your browser and visit http://localhost:3000.

Technologies Used
React: Frontend library for building user interfaces.
React Router: For routing and navigation.
React Hook Form: For form handling and validation.
Material UI: For pre-styled UI components.
Tailwind CSS: For utility-first CSS styling.
Local Storage: For persisting task data.