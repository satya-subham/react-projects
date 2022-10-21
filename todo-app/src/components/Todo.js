// import React, { useState } from "react";

// export function Todo() {
//   const [todos, SetTodos] = useState([]);
//   const [tasks, setTasks] = useState({});
//   const [count, setCount] = useState(1);
//   const [item, setItem] = useState("");

//   const addItems = () => {
//     if (tasks['text'].length > 1) {
//       SetTodos([...todos, tasks]);
//       setTasks({'text': ''});
//       setCount(count+1)
//     }
//   };

//   return (
//     <>
//       <div className="container">
//         <h2>Todo App</h2>
//         <input
//           type="text"
//           placeholder="Add items"
//           value={tasks.text}
//           onChange={(e) => setTasks({
//             'text': e.target.value,
//             'id': count,
//             'isEditable': false,
//           })}
//           id="todo_input"
//         />
//         <button onClick={addItems} id="add_btn">
//           Add
//         </button>
//         <h2>Todo Items</h2>
//         {todos.map((todo) => (
//           <div>
//             {
//               todo.isEditable ? 
//               <input
//               defaultValue={todo['text']}
//               id="items_input"
//               onChange={(e) => setItem(e.target.value)}
//             />
//             :
//             <p>{tasks['text']}</p>
//             }
//             <button id="edit_btn">Edit</button>
//             <button
//               onClick={() => {
//                 let filteredTodos = todos.filter((value) => value !== todo);
//                 SetTodos([...filteredTodos]);
//               }}
//               id="dlt_btn"
//             >
//               Delete
//             </button>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// }








// import React, { useState } from "react";

// export function Todo() {
//   const [inputTask, setInputTask] = useState({});
//   const [tasks, setTasks] = useState([]);
//   const [count, setCount] = useState(1);
//   const [updateText, setUpdateText] = useState("")

//   const handleAdd = ()=> {
//     setTasks([...tasks, inputTask]);
//     setInputTask({'text':''})
//     setCount(count+1)
//   }

//   const makeEditable = (thisTask) => {
//     let newTasks = [];
//     tasks.map((task) => {

//       let editable = false;
//       if (task.id == thisTask.id){
//         editable = true
//       }
//       newTasks.push({
//         ...task,
//         isEditable: editable
//       })
//     })
//     setTasks(newTasks)
//   }

//   const updateTaskAndMakeReadOnly = (thisTask) => {
//     let newTasks = [];
//     tasks.map((task) => {
//       let text = task.text;
//       if (task.id === thisTask.id){
//         text = updateText
//       }
//       newTasks.push({
//         ...task,
//         text: text,
//         isEditable: false
//       })
//     })
//     setTasks(newTasks)
//   }

//   return (
//     <>
//       <input
//         type="text" className="input1"
//         value={inputTask.text}
//         onChange={(e) => {
//           setInputTask({
//             'id': count,
//             'text': e.target.value,
//             'isEditable': false
//           })
//         }}
//       />
//       <button className="btn" onClick={handleAdd}>Add task</button>
//       <div className="container">
//         <h1>TO DO LIST</h1>
//       {tasks.map((task) => (
//         <div className="innercontainer" key={task.id}>
//           {
//             task.isEditable ?
//             <input type="text" className="input" defaultValue={task['text']} onChange={(event) => setUpdateText(event.target.value)} />
//             :
//             <p>{task['text']}</p>
//           }

//           <button className="btn btn2"
//             onClick={() => {
//              let filteredItems = tasks.filter((x) => x !== task);
//              setTasks([...filteredItems])
//             }}>
//             Delete Task
//           </button>
//           <button className="btn btn1" onClick={(event) => {
//             if(task.isEditable){
//               updateTaskAndMakeReadOnly(task)
//               event.target.innerText = 'Edit Task'
//             } else if (!task.isEditable) {
//               makeEditable(task);
//               event.target.innerText = 'Save Task'
//             }

//           }}>Edit Task</button>
//         </div>

//       ))}</div>
//     </>
//   );
// }





// ===================================================== NEW TODO APP



import React, { useState } from 'react'

export function Todo() {
  const [item, setItem] = useState('');
  const [todos, setTodos] = useState([]);
  const [isEditItem, setIsEditItem] = useState(null);

  const additem = () =>{
    if(!item){
      alert('pls insert item')
    }else{
      const allInputData = { id: new Date().getTime().toString(), name: item}
      setTodos([...todos, allInputData]);
      setItem('')
    }
  }

  const deleteItem = (ind) =>{
    const updatedItem = todos.filter((elem)=>{
      return ind != elem.id ;
    })
    setTodos(updatedItem)
  }

  const editItem = (id) =>{
    let newEditItem = todos.find((elem)=>{
      return elem.id === id ;
    })

    setItem(newEditItem.name);
    setIsEditItem(id)
  }
  return (
    <>
    <div className='main_div'>
      <div className='todo_heading_div'>
      <h1>Todo app</h1>
      </div>

      <div className='inp_btn_div'>
      <input type='text' id='input' value={item} onChange={(e)=>setItem(e.target.value)} placeholder='add items'/>
      <button onClick={additem}>Add</button>
      </div>

      
        {
          todos.map((elem)=>{
            return (
              <div className='show_item_div' key={elem.id}>
            <h3>{elem.name}</h3>
            <button onClick={()=>editItem(elem.id)}>Edit</button>
            <button onClick={()=>deleteItem(elem.id)}>Delete</button>
            </div>
            )
          })
        }
      
    </div>
    </>
  )
}
