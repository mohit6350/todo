import { useEffect, useState } from "react";
import "./App.css";

function App() {
 
  const [isCompleteScreen, SetIsCompleteScreen] = useState(false)

  return (
    <>
      <div className="App">
        <h1>My todos</h1>

        <div className="todo-wraper">
          <div className="todo-input">
            <div className="todo-input-item">
              <label>Title</label>
              <input type="text" placeholder="What's your new task..."></input>
            </div>
            <div className="todo-input-item">
             <label>Description</label>
              <input type="text" placeholder="Description"></input>
          </div>
          <div className="todo-input-item">
          <button type="button" className="primaryBtn">Add</button>
          </div>
          </div>

          
          <div className="btn-area">
              <button className={`secondaryBtn ${isCompleteScreen===false && 'active'}`}
              onClick={() => SetIsCompleteScreen(false)}
              >todo</button>
              <button className={`secondaryBtn ${isCompleteScreen===true && 'active'}`}
              onClick={() => SetIsCompleteScreen(true)}
              >complete</button>            
          </div>
          <div className="todo-list">
            <div className="todo-list-item">
              <h3>task 1</h3>
              <p>Description</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
