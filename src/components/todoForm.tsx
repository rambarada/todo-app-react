import { SubmitHandler, useForm } from "react-hook-form";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';

export enum TodoStatus {
    Incomplete = "INCOMPLETE",
    Complete = "COMPLETE",
    Pending = "Pending",
}

export interface TodoData {
    task: string;
    status: TodoStatus;
    dueDate: string;  // Add dueDate property
}

const TodoForm = () => {

    const { register, handleSubmit, formState: { errors, isSubmitting }, setValue } = useForm<TodoData>({
        defaultValues: {
            task: "",
            status: TodoStatus.Incomplete,
            dueDate: "",  // Default value for due date
        }
    });

    const onSubmit: SubmitHandler<TodoData> = (data: TodoData) => {
        console.log("data in the form ", data);
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
                    placeholder="task should be added here..."
                    {...register("task", {
                        required: "Please enter the task to do."
                    })}
                    error={!!errors.task}  // Error state
                    helperText={errors.task?.message}  // Error message
                />

                {/* Status Select */}
                <FormControl
                    fullWidth
                    margin="normal"
                    error={!!errors.status}  // Error state for Select
                >
                    <InputLabel>Status</InputLabel>
                    <Select
                        label="Status"
                        defaultValue={TodoStatus.Incomplete}  // Default value
                        {...register("status", {
                            required: "Please select a status."
                        })}
                        onChange={(e) => setValue('status', e.target.value as TodoStatus)}  // Manually set the status value
                    >
                        <MenuItem value={TodoStatus.Incomplete}>Incomplete</MenuItem>
                        <MenuItem value={TodoStatus.Complete}>Complete</MenuItem>
                        <MenuItem value={TodoStatus.Pending}>In Progress</MenuItem>
                    </Select>
                    <FormHelperText>{errors.status?.message}</FormHelperText>  {/* Error message */}
                </FormControl>

                {/* Due Date Input */}
                <TextField
                    label="Due Date"
                    type="date"  // Set the type to "date"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    {...register("dueDate", {
                        required: "Please select a due date.",
                    })}
                    error={!!errors.dueDate}  // Error state
                    helperText={errors.dueDate?.message}  // Error message
                    InputLabelProps={{ shrink: true }}  // Make the label always show
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
