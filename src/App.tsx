import { useState, useEffect, memo } from 'react'
import { TodoItem, Prompt } from '../src/model'
import ListTodo from './components/ListTodo'

function App() {

  const [value, setValue] = useState('')
  const [todos, setTodos] = useState<TodoItem[]>([])
  const [prompts, setPropmpts] = useState<Prompt[]>([])

  const AddTodo = () => {
    if (value) {
      setTodos([...todos, {
        id: Date.now(),
        title: value,
        completed: false
      }])
      setValue('')
    }
  }

  const EnterTodo: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === 'Enter') AddTodo()
  }

  const changeTodo = (id: number): void => {
    setTodos(todos.map((todo) => {
      if (todo.id !== id) return todo;

      return {
        ...todo,
        completed: !todo.completed
      }
    }))
  }

  const removeTodo = (id: number): void => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }



  useEffect(() => {
    const getPrompts = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/users/1/todos').then(res => res.json())
      setPropmpts(res.slice(0, 5))
    }
    getPrompts()
  }, [])

  return (
    <div className="w-1/2 mx-auto space-y-10">
      <p className="font-bold text-7xl text-center">Todo on TS</p>

      <div className='text-center space-x-10'>
        <input className='border-black border-2 rounded-full px-12 py-3 hover:outline-none' onKeyDown={EnterTodo} value={value} onChange={(e) => setValue(e.target.value)} />
        <button className='bg-black text-white px-6 py-3 rounded-full text-center hover:bg-black/90 hover:shadow-md font-semibold' onClick={AddTodo}>Добавить</button>
      </div>

      {!todos.length && <div className='space-y-10'>
        <p className='font-extrabold text-4xl'>Example prompt TODO</p>
        <div className='grid grid-cols-3 grid-rows-3 gap-5 text-center'>{prompts.map(({ title, id }) => (
          <p key={id} className="font-bold text-xl font-mono">{title}</p>
        ))}</div>
      </div>}

      <ListTodo todos={todos} changeTodo={changeTodo} removeTodo={removeTodo} />

    </div>
  );
}

export default memo(App);
