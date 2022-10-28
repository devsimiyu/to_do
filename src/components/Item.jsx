export default ({ todo, handleDelete, handleEdit }) => {
    return (
        <li>
            <p>
                {todo.title} - {todo.priority} <br />
            </p>
            <button onClick={() => handleEdit(todo)}>
                edit
            </button>
            <button onClick={() => handleDelete(todo.id)}>
                delete
            </button>
            <hr />
        </li>
    );
};
