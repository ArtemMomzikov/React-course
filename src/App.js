import {TaskInput} from './Todo_App/components/TaskInput/TaskInput';
import {AddTaskButton} from './Todo_App/components/AddTaskButton/AddTaskButton';
import {TaskList} from './Todo_App/components/TaskList/TaskList';
import './App.css';

function App() {
    return (
        <div className='todo'>
            <div className='todo-controls'>
                <TaskInput />
                <AddTaskButton />
            </div>
            <TaskList />
        </div>
    );
}

export default App;