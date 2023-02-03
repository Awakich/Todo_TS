import { TodoItem } from '../model'
import TodoItemInfo from './TodoItemInfo'
import { memo } from 'react'

interface ListProps {
    todos: TodoItem[];
    changeTodo: (id: number) => void;
    removeTodo: (id: number) => void;
}

const ListTodo: React.FC<ListProps> = ({ todos, changeTodo, removeTodo }) => {
    return (
        <div className='grid grid-cols-2 gap-5'>
            {todos.map(({ title, id, completed }) => (
                <TodoItemInfo key={id} id={id} title={title} completed={completed} changeTodo={changeTodo} removeTodo={removeTodo} />
            ))}
        </div>
    )
}

export default memo(ListTodo)