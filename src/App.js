import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TaskList from './components/TaskList';
import Addtask from './components/Addtask';


function App() {
  return (
    <div className="App">
      <Addtask TaskList={TaskList}/>
      <TaskList/>
    </div>
  );
}

export default App;
