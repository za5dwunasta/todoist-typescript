import React from 'react'

import './App.scss'

function App () {
  return (
    <div className='App'>
      <div className='todolist'>
        <div className='header'>
          <h1 className='header__name'>Todoist by Typecript</h1>
          <p className='header__tasks-left'>You have 5 tasks left</p>
        </div>
        <div className='tasks'>
          <div className='tasks__item'>
            <input type='checkbox' id='task-1' />
            <label htmlFor='task-1'>
              <span className='custom-checkbox'></span>
              first task
            </label>
          </div>
          <div className='tasks__item'>
            <input type='checkbox' id='task-2' />
            <label htmlFor='task-2'>
              <span className='custom-checkbox'></span>
              next task
            </label>
          </div>
          <div className='tasks__item'>
            <input type='checkbox' id='task-3' />
            <label htmlFor='task-3'>
              <span className='custom-checkbox'></span>
              another task
            </label>
          </div>
        </div>
        <div className='add-task'>
          <button className='btn create' aria-label='create new task'>
            +
          </button>
          <form action=''>
            <input
              type='text'
              className='new task'
              placeholder='new task name'
              aria-label='new task name'
            />
          </form>
        </div>
      </div>
    </div>
  )
}

export default App
