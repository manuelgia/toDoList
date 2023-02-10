import { useState } from "react";
import Todo from "./todo";
import './todoApp'
import 'boxicons'


export default function TodoApp() {
    const [title, setTitle] = useState("Ingresa aquí tu tarea");
    const [todos, setTodos] = useState([]);


    function handleChange(event) {
        const value = event.target.value;

        setTitle(value);
    }
    function handleInput() {
        
        setTitle("");
    }


    function handleSubmit(e) {
        e.preventDefault();
        
        const newTodo = {
            id: crypto.randomUUID(),
            title:title,
            completed: false
        };

        const temp = [ ...todos];
        temp.unshift(newTodo);

        setTodos(temp);
        setTitle("")
    }

    function handleUpdate(id, value) {
        const temp = [...todos];
        const item = temp.find(item => item.id === id);
        item.title = value;
        setTodos(temp)
    }
    function handleDelete(id) {
        const temp = todos.filter(item => item.id !== id);
        setTodos(temp);
    }
    
    return <div className="todoContainer"> 
        <div className="box">
        <i class='bx bx-list-ul bx-flashing' ></i>
            
        </div>
        <h1>Tareas pendientes </h1>
        
        
        
        <form className="todoCreateForm" onSubmit={handleSubmit}>
                <input onChange={handleChange} onClick={handleInput} className="todoInput" value={title}></input>
                <input onClick={handleSubmit} type="submit" value = "Create todo" className="buttonCreate"/>
        </form>
        <div className="todosContainer"> 
            {
                todos.map((item) => (
                    
                    <Todo key={item.id} item={item} onUpdate={handleUpdate} onDelete={handleDelete}/>
                ))}
        </div>
    </div>
}