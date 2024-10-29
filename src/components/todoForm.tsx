import { SubmitHandler, useForm } from "react-hook-form";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from "react";

export enum TodoStatus {
    Incomplete = "INCOMPLETE",
    Complete = "COMPLETE",
    InProgress = "IN_PROGRESS",
}

export interface TodoData {
    id: string;
    task: string;
    status: TodoStatus;
    dueDate: string;
    startTime: string;  // New property for start time
    endTime: string;    // New property for end time
}

const TodoForm = () => {

    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors, isSubmitting }, setValue } = useForm<TodoData>({
        defaultValues: {
            task: "",
            status: TodoStatus.Incomplete,
            dueDate: "",
            startTime: "",  // Default value for start time
            endTime: ""     // Default value for end time
        }
    });

    useEffect(() => {
        if (id) {
            const tasks: TodoData[] = JSON.parse(localStorage.getItem('tasks') || '[]');
            const task = tasks.find(task => task.id === id);
            if (task) {
                setValue("task", task.task);
                setValue("status", task.status);
                setValue("dueDate", task.dueDate);
                setValue("startTime", task.startTime);  // Set start time
                setValue("endTime", task.endTime);      // Set end time
            }
        }
    }, [id, setValue]);

    const onSubmit: SubmitHandler<TodoData> = (data: TodoData) => {
        const existingTasks: TodoData[] = JSON.parse(localStorage.getItem('tasks') || '[]');

        if (id) {
            const updatedTasks = existingTasks.map(task => task.id === id ? { ...task, ...data } : task);
            localStorage.setItem('tasks', JSON.stringify(updatedTasks));
            console.log("Task updated: ", data);
        } else {
            const newTask = { ...data, id: Date.now().toString() };
            existingTasks.push(newTask);
            localStorage.setItem('tasks', JSON.stringify(existingTasks));
            console.log("Task added: ", newTask);
        }

        navigate('/tasks');
    };

    return (
        <div>
            <h1 className="text-4xl mb-4">{id ? 'Update Task' : 'Add Task'}</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <TextField
                    label="Task"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    {...register("task", {
                        required: "Please enter the task to do."
                    })}
                    error={!!errors.task}
                    helperText={errors.task?.message}
                />

                <FormControl fullWidth margin="normal" error={!!errors.status}>
                    <InputLabel>Status</InputLabel>
                    <Select
                        label="Status"
                        defaultValue={TodoStatus.Incomplete}
                        {...register("status", {
                            required: "Please select a status."
                        })}
                    >
                        <MenuItem value={TodoStatus.Incomplete}>Incomplete</MenuItem>
                        <MenuItem value={TodoStatus.Complete}>Complete</MenuItem>
                        <MenuItem value={TodoStatus.InProgress}>In Progress</MenuItem>
                    </Select>
                    <FormHelperText>{errors.status?.message}</FormHelperText>
                </FormControl>

                <TextField
                    label="Due Date"
                    type="date"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    {...register("dueDate", {
                        required: "Please select a due date.",
                    })}
                    error={!!errors.dueDate}
                    helperText={errors.dueDate?.message}
                    InputLabelProps={{ shrink: true }}
                />
                <div className="flex gap-4 w-full">
                <TextField
                    label="Start Time"
                    type="time"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    {...register("startTime", {
                        required: "Please select a start time.",
                    })}
                    error={!!errors.startTime}
                    helperText={errors.startTime?.message}
                    InputLabelProps={{ shrink: true }}
                />

                <TextField
                    label="End Time"
                    type="time"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    {...register("endTime", {
                        required: "Please select an end time.",
                    })}
                    error={!!errors.endTime}
                    helperText={errors.endTime?.message}
                    InputLabelProps={{ shrink: true }}
                />

                </div>
               
                <div className="mt-4">
                    <Button
                        variant="outlined"
                        color="primary"
                        onClick={() => navigate(-1)}
                        style={{ marginRight: '8px' }}
                    >
                        Cancel
                    </Button>

                    <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                        disabled={isSubmitting}
                    >
                        {id ? "Update Task" : "Add Task"}
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default TodoForm;
