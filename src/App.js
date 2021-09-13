// import axios from 'axios';
import { useState, useEffect } from 'react';
import todos from './apis';

import './App.css';
import Form from './components/Form';
import List from './components/List';
import Section from './components/Section';
import AppTitle from './components/AppTitle';

const appTitle = '2Do';

function App() {

  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    async function fetchData(){
      const { data } = await todos.get("/todos");
      setTodoList(data);
    }
    fetchData();
  },[]);

  const addTodo = async (item) => {
    const { data } = await todos.post("/todos", item);
    setTodoList((oldList) => [...oldList, data]);
  };

  const removeTodo = async (id) => {
    await todos.delete(`/todos/${id}`);
    setTodoList((oldList) => oldList.filter((item) => item._id !== id));
  };

  const editTodo = async (id, item) => {
    await todos.put(`/todos/${id}`, item);
  }


  return (
    <div className="bg">
      <div className="ui container center aligned">
          <AppTitle title={appTitle}/>
        <Section>
          <Form addTodo ={addTodo} />
        </Section>
        <Section>
          <List list={todoList}
                editTodo={editTodo}
                removeTodo={removeTodo} />
        </Section>
      </div>
    </div>
  );
}

export default App;
