import {TaskContext} from '../context/TaskContext'
import {useContext} from 'react'

function TaskCard({task}) { //recibimos el prop "task" desde TaskList
  const {deleteTask, copyTask}=useContext(TaskContext)
  return (
    <div key={task.id} className="bg-gray-800 text-white p-4 rounded-md">
      <h1 className="text-xl font-bold capitalize">{task.title}</h1>
      <p className="text-gray-500 text-sm">{task.description}</p>
      <button className="bg-red-500 px-2 py-1 rounded-md mt-4 hover:bg-red-400 flex mx-auto" onClick={()=>deleteTask(task.id)}>Eliminar Tarea</button>
      {//tiene forma de funcion para que solo se ejecute
      //cuando se le da click, sino, se ejecutaria automatico
      }
      <button className="bg-green-800 px-2 py-1 rounded-md mt-4 hover:bg-green-400 flex mx-auto" onClick={()=>copyTask(task.id)}>Duplicar tarea</button>
    </div>
  )
}

export default TaskCard