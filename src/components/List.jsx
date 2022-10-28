import { useState, useEffect } from 'react';
import { faker } from '@faker-js/faker';

import Search from './Search';
import TodoItem from './Item';
import TodoForm from './Form';

export default () => {
    const [todos, setTodos] = useState([]);
    const [search, setSearch] = useState('');
    const [todo, editTodo] = useState();
    const handleUpsert = todo => {
        const index = todos.findIndex(({ id }) => id === todo.id);
        if (index === -1) setTodos([...todos, todo]);
        else {
            let updateTodos = todos;
            updateTodos[index] = todo;
            setTodos(updateTodos);
        }
    };
    const handleDelete = id => setTodos(todos.filter(todo => todo.id !== id));

    useEffect(() => setTodos(
        new Array(12).fill().map((_, i) => ({
            id: (Math.random() + 1).toString(36).substring(7),
            title: faker.lorem.words(),
            priority: i % 2 ? 'high' : i % 3 ? 'low' : 'medium'
        }))
    ), []);

    return (
        <>
            <Search
                search={search}
                handleSearch={setSearch} />
            <ul>
                {todos
                    .filter(todo => todo.title.includes(search))
                    .map(todo => <TodoItem 
                                    key={todo.id} 
                                    todo={todo}
                                    handleDelete={handleDelete}
                                    handleEdit={editTodo} />)}
            </ul>
            <TodoForm 
                todo={todo}
                handleUpsert={handleUpsert} />
        </>
    );
}
