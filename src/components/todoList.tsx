import TodoForm from "./todoForm"

const TodoList = () => {
  return (
    <>
    <div className="bg-white min-h-[600px] w-2/5 p-8 flex flex-col items-center  m-10">
      <h1 className="text-4xl mb-4"> TaskMaster</h1>
      <p>Organize, Prioritize, and Achieve Your Goals</p>
      <TodoForm />
    </div>
    </>
  )
}

export default TodoList
