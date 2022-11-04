//contendra toda la data (extraida de json si es necesario) y 
//funciones que seran llamadas a lo largo del proyecto
import {createContext, useState, useEffect} from 'react'
//importamos las tareas desde el archivo de datos
import {tasks as data} from '../task'
export const TaskContext= createContext() // se le asigna al
//.Provider mas cercano
export function TaskContextProvider(props) {
    const [tasks, setTasks] = useState([]);//arreglo vacio asignado a tasks
    //alamcenaremos datos en tasks y funciones en setTasks

    function createTask(task){ //recibimos un objeto que consta de
      //titulo y descripcion (no confundir con "task" normal)
      setTasks([...tasks, { //le agregaremos una task, a las existentes
        title: task.title, //se asigna el title de useState
        id: tasks.length,
        description: task.description
    }]) //sintaxis para agregar valores al arr
    }

    function deleteTask(taskId){
      //recorremos el arreglo de tareas y comparamos
      //con el id que hemos pasado, cuando se
      //cumpla la condicion se quita del arreglo
      //setTasks(tasks.filter(task => task.id !== taskId))
      const list_1=tasks.splice(0, taskId)
      var list_2=tasks.filter(task => task.id !== taskId)
      list_2.map((task)=>{ //recorremos los id del resto de tareas
        task.id-=1
      })
      setTasks([...list_1, ...list_2])
    }

    function copyTask(taskId){ //duplicamos la tarea, usando
      //el parametro id, tambien podriamos haber enviado todo
      //el obejto a createTask(), pero no podriamos estar seguros
      //de que tienen los mismos atributos y logica
      const a= [{//le agregaremos una task, a las existentes
        title: tasks[taskId].title, //se asigna el title de useState
        id: taskId+1,
        description: tasks[taskId].description
      }]
      const list_1=[...tasks.splice(0, taskId+1), ...a]
      tasks.map((task)=>{ //recorremos los id del resto de tareas
        task.id+=1
      })
      setTasks([...list_1, ...tasks])
    }

    function sort_desc(task_list){
      //debido a que la lista esta ordenada, solo se necesita
      //revertir el orden.
      //el boton sera unico (no en el componente tarea
      var i=task_list.length-1
      task_list.map((task)=>{
        task.id=i
        i--
      })
      setTasks([...task_list.reverse()])
    }

    useEffect(()=>{ //espera a que cargue, para traer la data 1 vez
        setTasks(data)
      },[])
    
  return ( //es la parte que sera exportada para ser usada
    <TaskContext.Provider value={{
        tasks: tasks,
        deleteTask: deleteTask,
        createTask: createTask,
        copyTask: copyTask, 
        sort_desc: sort_desc 
    }}>
        {props.children}
    </TaskContext.Provider>
  )
}

export default TaskContext