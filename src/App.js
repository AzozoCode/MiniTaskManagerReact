 import{useState} from 'react';
import './App.css';

function App() {
 
  const[newTask,setNewTask] = useState("");
  const[todoList,setTodoList] = useState([])
  const handleChange = (event)=>{
    setNewTask(event.target.value);
  }

  const addTask =()=>{
    const task={
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName:newTask
    };
    setTodoList([...todoList,task]);
  };
   
  const deleteTask =(id)=>{
    const newTodoList = todoList.filter((task)=> task.id !== id 
    )
        setTodoList(newTodoList)
    }
  
  return (
 
    <div className="App">
      <div className='addTask'>
        <input type="text" onChange={handleChange}/>
        < button onClick={addTask}>Add Task</button>
      </div>
      <div className='list'>
        {todoList.map((task)=>{
          return(
          <div className='listItem'>
            <h3>{task.taskName}</h3>
             <button onClick={()=>deleteTask(task.id)}>x</button>
          </div>
          )
        })}
       
        
       </div>
    </div>
  );
}

export default App;
