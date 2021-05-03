import * as React from 'react';

const toDo = props =>  
{
    return(
        <div>
            <p>{props.toDos.task}</p>
        </div>
    )
}

export default toDo;