import { useEffect, useState } from "react";
import "./App.css";
import { AiOutlineDelete } from "react-icons/ai";
import { BsCheckLg } from "react-icons/bs";

function App() {
  const [isCompleteScreen, SetIsCompleteScreen] = useState(false);
  const [allTodos, setAllTodos] = useState([]);
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");

  const handleAddTodo = () => {
    let newTodoItem = {
      title: newTitle,
      description: newDescription,
    };

    let updatedTodoArr = [...allTodos];
    updatedTodoArr.push(newTodoItem);
    setAllTodos(updatedTodoArr);
    localStorage.setItem('todo-list',JSON.stringify(updatedTodoArr))
  };

  useEffect(()=>{
    let savedTodo = JSON.parse(localStorage.getItem('todo-list'))
    if(savedTodo){
      setAllTodos(savedTodo)
    }
  },[])

  const deleteTodoItem = (index) => {
    let oldTodoArr = [...allTodos]
    oldTodoArr.splice(index,1)

    localStorage.setItem('todo-list',JSON.stringify(oldTodoArr))
    setAllTodos(oldTodoArr)

  }

  return (
    <>
      <div className="App">
        <h1>My todos</h1>

        <div className="todo-wraper">
          <div className="todo-input">
            <div className="todo-input-item">
              <label>Title</label>
              <input
                type="text"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                placeholder="What's your new task..."
              ></input>
            </div>
            <div className="todo-input-item">
              <label>Description</label>
              <input
                type="text"
                value={newDescription}
                onChange={(e) => setNewDescription(e.target.value)}
                placeholder="Description"
              ></input>
            </div>
            <div className="todo-input-item">
              <button
                type="button"
                onClick={handleAddTodo}
                className="primaryBtn"
              >
                Add
              </button>
            </div>
          </div>

          <div className="btn-area">
            <button
              className={`secondaryBtn ${
                isCompleteScreen === false && "active"
              }`}
              onClick={() => SetIsCompleteScreen(false)}
            >
              todo
            </button>
            <button
              className={`secondaryBtn ${
                isCompleteScreen === true && "active"
              }`}
              onClick={() => SetIsCompleteScreen(true)}
            >
              complete
            </button>
          </div>
          <div className="todo-list">
            {allTodos.map((item, index) => {
              return (
                <div className="todo-list-item" key={index}>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                  <div>
                    <AiOutlineDelete className="icon" onClick={()=>deleteTodoItem(index)}/>
                    <BsCheckLg className="check-icon" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
