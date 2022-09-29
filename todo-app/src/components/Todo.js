import React, { useState } from "react";

export function Todo() {
  const [todos, SetTodos] = useState([]);
  const [item, setItem] = useState("");


  const addItems = () => {
    SetTodos([...todos, item]);
    setItem("");
  };
  

  return (
    <>
      <div className="container">
        <h2>Todo App</h2>
        <input
          type="text"
          placeholder="Add items"
          value={item}
          onChange={(e) => setItem(e.target.value)}
          id="todo_input"
        />
        <button onClick={addItems} id="add_btn">
          Add
        </button>
        <h2>Todo Items</h2>
        {todos.map((todo) => (
          <div>
            <input defaultValue={todo} id="items_input" onChange={(e) => setItem(e.target.value)}/>
            <button id="edit_btn">Edit</button>
            <button
              onClick={() => {
                let filteredTodos = todos.filter((value) => value !== todo);
                SetTodos([...filteredTodos]);
              }}
             id="dlt_btn">
              Delete
            </button>
          </div>
        ))}
      </div>
    </>
  );
}















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
//       if (task.id == thisTask.id){
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
