// component

import React, { useState } from 'react';

function ToDoList() {

    // When we close the web app, the variable data is lost
    // for example, in our todolist app, when we close the tab, the todolist is lost
    // To save this data, we use localstorage

    // the key and the value in localStorage must be strings

    // we will have to convert our todos array to a string:
    // JSON.stringify: object -> JSON string
    // JSON.parse: JSON string -> object

    // stack, but we'll use an array and render it in reverse order

    // initializing a todo, instead of using [], we will use the value that we get from localStorage
    const initailTodoValue = JSON.parse(localStorage.getItem('mytodos')) ;
    if(!initailTodoValue){
        initailTodoValue = [];
    }
    const [todos, setTodos] = useState(initailTodoValue);

    const handleSubmit = (event) => {
        // Prevent the default form submission
        event.preventDefault();
        const newTodo = { 'text': event.target.elements.todo.value, completed: false };
        event.target.elements.todo.value = ""
        const updatedToDoList = [...todos];
        updatedToDoList.push(newTodo);
        // console.log(updatedToDoList);

        localStorage.setItem('mytodos', JSON.stringify(updatedToDoList));

        setTodos(updatedToDoList);
    }

    const handleCompleted = (index) => {
        // You can and should not directly mutate a state variable
        // todos[index].completed = true;

        // we should always use setTodos function to change a state
        const newTodos = [...todos];
        newTodos[index].completed = !newTodos[index].completed;
        localStorage.setItem('mytodos', JSON.stringify(newTodos));

        setTodos(newTodos);
    }

    const handleDelete = (index) => {
        const newTodos = [...todos];
        // Array.splice will mutate the newTodos array itself
        newTodos.splice(index, 1);
        localStorage.setItem('mytodos', JSON.stringify(newTodos));
        setTodos(newTodos);
    }

    return (
        <>
            <h1>ToDoList</h1>
            <form onSubmit={handleSubmit}>
                <input type='text' name='todo' />
                <button type='submit'>Add Todo</button>
            </form>
            <div>
                <h2>Current Todos:</h2>
                <ul>
                    {/* Display our Todos here */}
                    {/* Removing fitler because the index of a todo in filtered array
                    and the original todos array might not me same */}
                    {todos.map((todo, index) => (
                        todo.completed
                            ?
                            null
                            :
                            <li key={index}>
                                {todo.text}
                                <button onClick={() => handleCompleted(index)} >Complete</button>
                                <button onClick={() => handleDelete(index)} >X</button>
                            </li>
                    )).reverse()}
                </ul>
            </div>
            <div>
                <h2>Completed Todos:</h2>
                <ul>
                    {todos.map((todo, index) =>
                        todo.completed
                            ?
                            <li key={index} style={{ textDecoration: 'line-through' }}>
                                {todo.text}
                                <button onClick={() => handleCompleted(index)} >UnComplete</button>
                                <button onClick={() => handleDelete(index)} >X</button>
                            </li>
                            :
                            null

                    )
                        .reverse()}</ul>
            </div>
        </>
    )

}

export default ToDoList