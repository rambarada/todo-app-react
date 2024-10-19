import { Button } from "@mui/material";
import { TodoData } from "./todoForm"
import { useNavigate } from "react-router-dom";

const TodoList = () => {
    console.log("TodoList is rendering");
const tasks: TodoData[] = JSON.parse(localStorage.getItem('tasks') || '[]');
const navigate = useNavigate();

const onNavigateToNewTask = () =>{

    console.log("entered route")
    navigate('new');
}

return (
    <>
   
      <h1 className="text-4xl mb-4"> TaskMaster</h1>
      <p>Organize, Prioritize, and Achieve Your Goals</p>
      <div>
            <h2>Task List</h2>
            {tasks.length === 0 ? (
                <p>No tasks available.</p>
            ) : (
                <ul>
                    {tasks.map((task, index) => (
                        <li key={index}>
                            <strong>{task.task}</strong> - {task.status} - Due: {task.dueDate}
                        </li>
                    ))}
                </ul>
                
            )}
            <Button variant="contained" color="primary" onClick={()=>onNavigateToNewTask()}>ADD A Task</Button>
        </div>
      {/* <TodoForm /> */}
    </>
  )
}

export default TodoList
