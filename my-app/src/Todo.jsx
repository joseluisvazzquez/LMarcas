import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";


function Todo(){
    // inicializamos los hooks para poder declarar las variables de estado
    // Estas variables se llamara todo(to-do) , useState devolvera los dos valores: El valor actual del estado todo
    // y una funcion para actualizar el valor de la variable y su valor inicial se establece como una cadena vacia("")


    //  Lo mismo pasara con todos(to-dos), se utiliza para almacenar y gestionar el estado interno de un componente.
    // Gracias a estas variables el componente que las utilice podra realizar y guardar los cambios y tambien actualizar la interfaz del usuario

    // todo se refiere a la tarea...
    const [todo, setTodo] = useState(" ");
    // todos se refiere a la lista en si de tareas ( al conjunto)...
    const [todos,setTodos] = useState([]);
    const handleChange = (e)=>{
      setTodo(e.target.value)
        // Con esta variable gestionamos el input del usuario
        // Guardara los inputs que registra(e.target.value) en todo...
        // Para  poder capturar el input utilizaremos el onChange, en el elemento input... 
        // se llama a esta función y actualiza el estado 'todo' con el nuevo valor del input.
    };

    const handleSubmit = (e)=> {
        // evita la recarga de la página, los formularios cuando se envian 
        // recargan la pagina y no es posible manejar de forma personalizada los inputs
      e.preventDefault()
    //   Aqui nos aseguramos de que la lista/ el valor de todo no sea vacio
      if(todo !==""){
        setTodos([...todos, {id: `${todo}-${Date.now()}`,todo}]);
        // Agrega un nuevo elemento al estado 'todos',el id en este caso seria la variable todo 
        // y el Date.now sera el tiempo en el momento y asi tenemos un id que es unico entre los demas
        setTodo("");
        // Limpiamos el estado de todo convirtiendolo en una cadena vacia
      }
    };
    // Aqui iniciamos la funcion para eliminar
    //  la tarea seleccionada (id), dentro creamos un nuevo array de todos con .filter
    // dentro de esta funcion solo anadira aquellos con el id diferente al que teniamos antes

    // elimina la tarea con el id proporcionado del array de tareas todos y 
    // actualiza el estado todos con el nuevo array que excluye la tarea eliminada setTodos([...delTodo]).
    const deleteHandler =(id) =>{
      const delTodo = todos.filter((to) =>to.id !== id)
      setTodos([...delTodo])
    }
    
  return(
    <>
      <div className='container bg-dark text-center rounded my-3 py-3' >
        <h1 className="text-light">Todo List</h1>
        
        <form onSubmit={handleSubmit} className='my-2'>
           <input 
             className="form-control mt-2 mb-3 text-center" 
             type="text" 
             placeholder="Enter Todo..."
             onChange={handleChange}
             value={todo}
           />
        </form>
      </div>
      <div>
        {todos.map((t) => {
            return(
              <>
                  <div className="container bg-secondary d-flex mt-2 px-3 py-2 rounded">
                    <p className="todo text-light" key={t.id}>{t.todo}</p>
                    <button onClick={()=>deleteHandler(t.id)} className="btn btn-danger mx-2">Delete</button>
                  </div>
              </>  
            )
          })
        }
      </div>
    </>
  )
}
export default Todo;