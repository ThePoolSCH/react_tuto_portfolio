//contiene las boxes de tareas que se muestran debajo del form
import TaskCard from './TaskCard'
import {useContext} from 'react'
import {TaskContext} from '../context/TaskContext'

function TaskList() {
  const {tasks, sort_desc} = useContext(TaskContext) //trae la data almacenada
  //en TaskContext
  if(tasks.length===0){
    return <h1>no hay tareas</h1>
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-4 gap-2">
    {
      tasks.map((task)=>( //task nos trae cada objeto del arreglo (tasks)
        <TaskCard key={task.id} task={task}/>
      ))
    }
      <button className="bg-blue-800 h-8 px-2 py-1 mx-2 rounded-md mt-4 hover:bg-blue-400 inline" onClick={()=>sort_desc(tasks)}>Revertir Tareas</button>
    </div>
  )
}

export default TaskList