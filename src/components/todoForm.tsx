import { SubmitHandler, useForm } from "react-hook-form";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

export enum TodoStatus {
    Incomplete = "INCOMPLETE",
    Complete = "COMPLETE",
    InProgress = "IN_PROGRESS",
}

export interface TodoData {
    task: string;
    status: TodoStatus;
    dueDate: string;  // Add dueDate property
}

const TodoForm = () => {

    const navigate = useNavigate(); // Initialize navigate
    const { register, handleSubmit, formState: { errors, isSubmitting }, setValue } = useForm<TodoData>({
        defaultValues: {
            task: "",
            status: TodoStatus.Incomplete,
            dueDate: "",  // Default value for due date
        }
    });

    const onSubmit: SubmitHandler<TodoData> = (data: TodoData) => {
        const existingTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        existingTasks.push(data);
        localStorage.setItem('tasks', JSON.stringify(existingTasks));
        console.log("Task added: ", data);
        navigate('/tasks');
    };

    return (
        <div>
            
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* Task Input */}
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

                {/* Status Select */}
                <FormControl fullWidth margin="normal" error={!!errors.status}>
                    <InputLabel>Status</InputLabel>
                    <Select
                        label="Status"
                        defaultValue={TodoStatus.Incomplete}
                        {...register("status", {
                            required: "Please select a status."
                        })}
                        onChange={(e) => setValue('status', e.target.value as TodoStatus)}
                    >
                        <MenuItem value={TodoStatus.Incomplete}>Incomplete</MenuItem>
                        <MenuItem value={TodoStatus.Complete}>Complete</MenuItem>
                        <MenuItem value={TodoStatus.InProgress}>In Progress</MenuItem>
                    </Select>
                    <FormHelperText>{errors.status?.message}</FormHelperText> 
                </FormControl>

                {/* Due Date Input */}
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

                {/* Submit Button */}
                <Button 
                    variant="contained" 
                    color="primary" 
                    type="submit" 
                    disabled={isSubmitting}
                >
                    {isSubmitting ? "Submitting..." : "Add Task"}
                </Button>
            </form>
        </div>
    );
};

export default TodoForm;
