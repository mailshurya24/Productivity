import React from 'react';
import toDo from './ToDo';

const toDoList = props =>
{
    return(
        <div>
            {props.toDos.map((todo, id)=>{
                <toDO todo = {todo} key = {id}/>
            })}
        </div>
    )

    export default toDoList;
}