 import{useState} from 'react';
import './App.css';

function App() {
 
  const[newTask,setNewTask] = useState("");
  const[todoList,setTodoList] = useState([])
  const handleChange = (event)=>{
    setNewTask(event.target.value);
  }

  const addTask =(newTask)=>{
    const task={
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName:newTask
    }
    setTodoList([...todoList,newTask]);
  }
   
  const deleteTask =(taskName)=>{
    const newTodoList = todoList.filter((task)=> task !== taskName 
    )
        setTodoList(newTodoList)
    }
  
  return (
 
    <div className="App">
      <div className='addTask'>
        <input type="text" onChange={handleChange}/>
        < button onClick={()=>addTask(newTask)}>Add Task</button>
      </div>
      <div className='list'>
        <h1>{todoList.map((task)=>{
          return(
          <div className='listItem'>
            <h3>{task}</h3>
             <button onClick={()=>deleteTask(task)}>x</button>
          </div>
          )
        })}</h1>
       
        
       </div>
    </div>
  );
}

export default App;
