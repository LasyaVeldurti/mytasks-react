import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import TagItem from '../TagItem'

import TaskItem from '../TaskItem'

import './index.css'

const tagsList = [
  {
    optionId: 'HEALTH',
    displayText: 'Health',
  },
  {
    optionId: 'EDUCATION',
    displayText: 'Education',
  },
  {
    optionId: 'ENTERTAINMENT',
    displayText: 'Entertainment',
  },
  {
    optionId: 'SPORTS',
    displayText: 'Sports',
  },
  {
    optionId: 'TRAVEL',
    displayText: 'Travel',
  },
  {
    optionId: 'OTHERS',
    displayText: 'Others',
  },
]

class MyTasks extends Component {
  state = {
    activeTabId: '',
    inputTask: '',
    inputTag: tagsList[0].optionId,
    tasksList: [],
  }

  onSubmitTask = event => {
    event.preventDefault()
    const {inputTask, inputTag} = this.state
    const newTask = {
      id: uuidv4(),
      inputTask,
      inputTag,
    }
    this.setState(prevState => ({
      tasksList: [...prevState.tasksList, newTask],
      inputTask: '',
      inputTag: '',
    }))
  }

  onChangeTagItem = event => {
    console.log(event.target.value)
    this.setState({inputTag: event.target.value})
  }

  onChangeTask = event => {
    this.setState({inputTask: event.target.value})
  }

  onClickTag = id => {
    this.setState({activeTabId: id})
  }

  render() {
    const {activeTabId, inputTask, inputTag, tasksList} = this.state
    let filteredTasks
    if (activeTabId === '') {
      filteredTasks = tasksList
    } else {
      filteredTasks = tasksList.filter(item => item.inputTag === activeTabId)
    }

    let displayTaskList
    if (filteredTasks.length > 0) {
      displayTaskList = true
    } else {
      displayTaskList = false
    }

    return (
      <div className="bg-container">
        <div className="input-container">
          <h1 className="heading">Create a task!</h1>
          <form onSubmit={this.onSubmitTask}>
            <label htmlFor="task">Task</label>
            <br />
            <input
              onChange={this.onChangeTask}
              className="task-input"
              id="task"
              type="text"
              value={inputTask}
              placeholder="Enter the task here"
            />
            <br />
            <label htmlFor="tags">Tags</label>
            <br />
            <select value={inputTag} onChange={this.onChangeTagItem} id="tags">
              {tagsList.map(eachOption => (
                <option key={eachOption.optionId} value={eachOption.optionId}>
                  {eachOption.displayText}
                </option>
              ))}
            </select>
            <br />
            <button className="add-task-btn" type="submit">
              Add Task
            </button>
          </form>
        </div>
        <div className="display-container">
          <h1>Tags</h1>
          <ul className="tags-container">
            {tagsList.map(eachTag => (
              <TagItem
                key={eachTag.optionId}
                tagDetails={eachTag}
                isActive={eachTag.optionId === activeTabId}
                onClickTag={this.onClickTag}
              />
            ))}
          </ul>
          <h1>Tasks</h1>
          {displayTaskList ? (
            <>
              <ul className="tasks-container">
                {filteredTasks.map(eachTask => (
                  <TaskItem key={eachTask.id} taskDetails={eachTask} />
                ))}
              </ul>
            </>
          ) : (
            <div className="no-tasks-view">
              <p>No Tasks Added Yet</p>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default MyTasks
