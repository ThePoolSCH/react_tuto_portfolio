//importamos el useState para almacenar datos y useEffect para comprobar datos
import {useState, useContext} from 'react'
import {TaskContext} from '../context/TaskContext'
function TaskForm() {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const { createTask }=useContext(TaskContext) //lama a la funcion
    //create task desde TaskContext
    const handleSubmit = (e) => {
        e.preventDefault() //evita que la pagina refresh
        createTask({
            title,
            description
        })
        setTitle('') //seteamos el title a ''
        setDescription('')
    }
  return (
    <div className="max-w-md mx-auto pt-2">
        <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4">
            <input placeholder="Escribe tu tarea"
            onChange={(e)=>setTitle(e.target.value)} //se va asignando
            //a title el valor cada vez que se intectua con la box
            value={title} //cuando se envia el formulario
            //se actualiza a vacio setTitle('') 
            className="bg-slate-300 p-3 w-full mb-2"
            autoFocus
            />
            <textarea placeholder='Añade descripcion'
            onChange={(e)=>setDescription(e.target.value)}
            value={description}
            className="bg-slate-300 p-3 w-full mb-2">
            </textarea>
            {// el boton es el trigger para submit form, lo que a su
            //activa la funcion handle submit, que crea la tarea
            }
            <button className="bg-indigo-500 px-3 py-1 text-white flex">Guardar</button>
        </form>
    </div>
  )
}

export default TaskForm