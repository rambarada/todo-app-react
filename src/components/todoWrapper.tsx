import React from 'react';
import { Outlet } from 'react-router-dom'; // Import Outlet


const TodoWrapper: React.FC = () => {
    return (
        <div className="bg-black w-full h-screen flex justify-center items-center">
            <div className="bg-white min-h-[600px] w-3/5 p-8 flex flex-col items-center rounded-md m-10">
                <Outlet /> {/* Render child routes here */}
            </div>
           
        </div>
    );
}

export default TodoWrapper;
