import TodoForm from "./components/todoForm"
import TodoList from "./components/todoList";
import TodoWrapper from "./components/todoWrapper"
import {createBrowserRouter,Navigate,RouterProvider} from 'react-router-dom'

function App() {

  const routes = createBrowserRouter([
    {
        path: '/',
        element: <Navigate to="/tasks" />,  // Redirect to /tasks
    },
    {
        path: 'tasks',
        element: <TodoWrapper />, // Render the wrapper
        children: [
            {
                path:'', // This will render TodoList at /tasks
                element: <TodoList />,
            },
            {
                path: 'new', // Render TodoForm at /tasks/new
                element: <TodoForm />,
            },
            {
                path: ':id', // Render TodoForm for editing a specific task at /tasks/:id
                element: <TodoForm />,
            },
        ],
    },
]);

  return (

    <RouterProvider router={routes}>
    </RouterProvider>
    
  )
}

export default App;
