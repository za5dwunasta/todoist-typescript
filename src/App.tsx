import React, { useState, useEffect } from 'react'

import './App.scss'

interface ITodoItem {
  task: string
  completion: boolean
}

type FormElem = React.FormEvent<HTMLFormElement>

function App (): JSX.Element {
  const initialTaskList: ITodoItem[] = [
    { task: 'Go Shopping', completion: false },
    { task: 'Call Grandpa', completion: false }
  ]

  const [newTask, setNewTask] = useState<string>('')
  const [taskList, setTaskList] = useState<ITodoItem[]>(initialTaskList)
  const [taskLeft, setTaskLeft] = useState<number>()

useEffect(() => {
  const _taskLeft: number = taskList.reduce((acc, todo) => !todo.completion ? acc + 1 : acc, 0)
  setTaskLeft(_taskLeft)
}, [taskList])

  const handleSubmit = (e: FormElem): void => {
    e.preventDefault()
    const _taskList: ITodoItem[] = [
      ...taskList,
      { task: newTask, completion: false }
    ]
    setTaskList(_taskList)
    setNewTask('')
  }

  const handleComplete = (index: number) => {
      const _taskList = [...taskList]
      _taskList[index].completion = !_taskList[index].completion
      setTaskList(_taskList)
  }

  return (
    <div className='App'>
      <div className='todolist'>
        <div className='header'>
          <h1 className='header__name'>Todoist by TypeScript</h1>
          <p className='header__tasks-left'>You have {taskLeft} {taskLeft === 1 ? "task" : "tasks"} left</p>
        </div>
        <div className='tasks'>
          {taskList.map((todo, index) => {
            return (
              <div className='tasks__item' key={index}>
                <input type='checkbox' id={`task-${index}`} />
                <label htmlFor={`task-${index}`} onClick={() => handleComplete(index)}>
                  <span className='custom-checkbox'></span>
                  <span style={{textDecoration: todo.completion ? 'line-through' : "none"}}>{todo.task}</span>
                </label>
              </div>
            )
          })}
        </div>

        <form className='add-task' action='' onSubmit={handleSubmit}>
          <button
            type='submit'
            className='add-task__btn btn create'
            aria-label='create new task'
          >
            +
          </button>
          <input
            type='text'
            className='add-task__input'
            placeholder='new task name'
            aria-label='new task name'
            onChange={e => setNewTask(e.target.value)}
            value={newTask}
            required
          />
        </form>
      </div>
    </div>
  )
}

export default App
