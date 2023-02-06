export const Task = (props)=>{
    return(
          <div className='listItem' style={{backgroundColor:props.completed ? "green":"white"}}>
            <h3>{props.taskName}</h3>
            <button onClick={()=>props.completedTask(props.id)}>Completed</button>
             <button onClick={()=>props.deleteTask(props.id)}>X</button>
          </div>
          )
}