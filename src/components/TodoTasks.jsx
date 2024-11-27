import React from 'react'

const TodoTasks = () => {
  return (
    <div className='h-10 w-96 flex gap-x-2'>
      <input type="text" className='h-9 w-60 border-none outline-none rounded-lg'/>
      <button className='h-9 px-3 border-none outline-none rounded-lg text-white bg-slate-600'>Update</button>
      <button className='h-9 px-3 border-none outline-none rounded-lg text-white bg-slate-600'>Delete</button>
    </div>
  )
}

export default TodoTasks