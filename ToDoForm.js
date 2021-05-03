import React from 'react';

const ToDoForm = props =>
{
    return(
        <form>
            <input name = "toDo" placeholder = "Create New Task" type = "text"/>
            <button>Add a Task</button>
            <button>Remove a Task</button>
        </form>
    )
}

export default ToDoForm;