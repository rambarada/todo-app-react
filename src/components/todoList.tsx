import { Button } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import ListAltIcon from '@mui/icons-material/ListAlt';
import { TodoData, TodoStatus } from "./todoForm";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const TodoList = () => {
    const tasks: TodoData[] = JSON.parse(localStorage.getItem('tasks') || '[]');
    const navigate = useNavigate();
    const [todoTasks, setTodoTasks] = useState(tasks);

    const onNavigateToEditTask = (id: string) => {
        navigate(`/tasks/${id}`);
    };

    const onDeleteTask = (id: string) => {
        const updatedTasks = tasks.filter(task => task.id !== id);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
        setTodoTasks(updatedTasks);
    };

    const getStatusIcon = (status: TodoStatus) => {
        switch (status) {
            case TodoStatus.Complete:
                return <CheckCircleIcon className="text-green-500" />;
            case TodoStatus.InProgress:
                return <HourglassEmptyIcon className="text-yellow-500" />;
            case TodoStatus.Incomplete:
            default:
                return <ListAltIcon className="text-gray-500" />;
        }
    };

    const formatDueDateTime = (dueDate: string) => {
        const date = new Date(dueDate);
        const today = new Date();
        const tomorrow = new Date(today);
        tomorrow.setDate(today.getDate() + 1);

        let dateLabel = dueDate;
        if (
            date.getDate() === today.getDate() &&
            date.getMonth() === today.getMonth() &&
            date.getFullYear() === today.getFullYear()
        ) {
            dateLabel = "Today";
        } else if (
            date.getDate() === tomorrow.getDate() &&
            date.getMonth() === tomorrow.getMonth() &&
            date.getFullYear() === tomorrow.getFullYear()
        ) {
            dateLabel = "Tomorrow";
        } else {
            dateLabel = date.toLocaleDateString();
        }
        return `${dateLabel}`;
    };

    const getStatusLabelAndColor = (status: TodoStatus) => {
        switch (status) {
            case TodoStatus.Complete:
                return { label: "Completed", color: "bg-green-500 text-white" };
            case TodoStatus.InProgress:
                return { label: "In Progress", color: "bg-blue-500 text-white" };
            case TodoStatus.Incomplete:
            default:
                return { label: "Pending", color: "bg-gray-500 text-white" };
        }
    };

    return (
        <>
            <h1 className="text-4xl font-bold mb-2 text-center">TaskMaster</h1>
            <p className="text-lg text-center mb-6">Organize, Prioritize, and Achieve Your Goals</p>

            <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 my-8">
                {todoTasks.length === 0 ? (
                    <p className="text-center text-gray-500">No tasks available.</p>
                ) : (
                    todoTasks.map((task) => {
                        const { label, color } = getStatusLabelAndColor(task.status);
                        return (
                            <div
                                key={task.id}
                                className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-between"
                            >
                                <div className="flex items-center mb-2">
                                    {getStatusIcon(task.status)}
                                    <h2
                                        className={`text-xl font-semibold ml-2 ${
                                            task.status === TodoStatus.Complete
                                                ? "line-through text-gray-500"
                                                : ""
                                        }`}
                                    >
                                        {task.task}
                                    </h2>
                                </div>
                                <div className="border-t border-gray-300 my-2"></div>
                                <p className="text-gray-700">
                                    {formatDueDateTime(task.dueDate)}
                                    <span className="text-gray-500 opacity-75 ml-1">
                                        {task.startTime} - {task.endTime}
                                    </span>
                                </p>
                                {/* Status Label with Conditional Color */}
                                <div className={`rounded-md w-fit px-4 py-1 mt-2 ${color}`}>
                                    {label}
                                </div>
                                <div className="flex justify-end mt-4">
                                    <Button
                                        onClick={() => onNavigateToEditTask(task.id)}
                                        className="mr-2"
                                    >
                                        <EditIcon className="text-blue-500" />
                                    </Button>
                                    <Button onClick={() => onDeleteTask(task.id)}>
                                        <DeleteIcon className="text-red-500" />
                                    </Button>
                                </div>
                            </div>
                        );
                    })
                )}
            </div>

            <div className="flex justify-center mt-6">
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => navigate('new')}
                    className="text-lg"
                >
                    ADD A Task
                </Button>
            </div>
        </>
    );
};

export default TodoList;
