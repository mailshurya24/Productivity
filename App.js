import React, {Component} from 'react';
import ToDoList from './ToDoList';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';

export default class App extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = 
        {
            toDos: [{
                task: '',
                taskID: '',
                completed: false
            }],
            
            toDo: ''
        }
    }

    render()
    {
        return(
            <div className = "App">
                <h1>Your to-do List</h1>
                <ToDoList toDos = {this.state.toDos}/>
                <ToDoForm toDos = {this.state.toDos}/>
            </div>
        )
    }
}