import React from 'react';
import './App.css';
import TodoList from "./TodoList"
import {Link,Route,Redirect} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <h1>welcome to the app</h1>
      <p>
        <Link to='/todos'>see my todos</Link>
      </p>
      <p>
        <Link to='/todos/new'>addtodos</Link>
      </p>
      <Route path='/todos' component={TodoList}></Route>
      <Route exact path='/' render={()=> <Redirect to='/todos'></Redirect>}></Route>
    </div>
  );
}

export default App;
