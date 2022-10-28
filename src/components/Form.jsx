import { useState } from "react";

export default ({ handleUpsert, todo }) => {
    todo = todo || {};
    const [fields, setFields] = useState({
        title: todo.title || '',
        priority: todo.priority || ''
    });
    const handleChange = (key, value) => setFields({
        ...fields,
        [key]: value
    });
    const handleSave = (e) => {
        e.preventDefault();
        handleUpsert({
            ...fields,
            id: todo.id || (Math.random() + 1).toString(36).substring(7)
        });
    };

    return (
        <form onSubmit={handleSave}>
            <div>
                <label>Title:</label>
                <input
                    type="text"
                    value={fields.title}
                    onChange={e => handleChange('title', e.target.value)} />
            </div>
            <div>
                <label>Priority:</label>
                <input
                    type="radio"
                    value="high"
                    checked={fields.priority == 'high'}
                    onChange={() => handleChange('priority', 'high')} />
                <span>High</span>
                <input
                    type="radio"
                    value="low"
                    checked={fields.priority == 'low'}
                    onChange={() => handleChange('priority', 'low')} />
                <span>Low</span>
                <input
                    type="radio"
                    value="medium"
                    checked={fields.priority == 'medium'}
                    onChange={() => handleChange('priority', 'medium')} />
                <span>Medium</span>
            </div>
            <button type="submit">Save</button>
        </form>
    );
}
