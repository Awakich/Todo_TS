import { TodoItem } from '../model'
import { memo } from 'react';

interface TodoInfo extends TodoItem {
    removeTodo: (id: number) => void;
    changeTodo: (id: number) => void;
}

const TodoItemInfo: React.FC<TodoInfo> = ({ title, completed, id, changeTodo, removeTodo }) => {
    return (
        <div className={completed ? "bg-green-600 px-5 py-8 space-y-5 border-2 border-dashed border-white rounded-lg text-black hover:cursor-pointer" : ' hover:cursor-pointer border-2 border-dashed border-black px-5 py-8 space-y-5 rounded-lg bg-red-600'}>
            <button className={completed ? "bg-black text-white block font-bold text-xl w-full rounded-full py-2 hover:bg-black/90 transition-all" : 'font-bold text-xl bg-white block w-full rounded-full py-2 hover:bg-white/90 transition-all'} onClick={() => removeTodo(+id)}>X</button>
            <div onClick={() => changeTodo(+id)}>
                <div className='flex justify-between items-center gap-5'>
                    <h2 className='font-bold text-4xl'>{title}</h2>
                    <p className='font-semibold text-xl'>{`ID is ${id}`}</p>
                </div>
                <p className='font-medium text-lg'>{`Complete: ${completed}`}</p>
            </div>
        </div>

    )
}

export default memo(TodoItemInfo)