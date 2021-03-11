import React, { useState, useEffect } from 'react';
import TodoItem from './TodoItem.js';
import Addnew from '../../../assets/images/Addnew.png';
import { useTranslation } from 'react-i18next';

function TodoList() {
  const { t } = useTranslation();
  const [Todolist, setTodolist] = useState({
    date: new Date().toDateString(),
    todoItems: [],
  });

  useEffect(() => {
    if (localStorage.getItem('Todolist')) {
      let temp = JSON.parse(localStorage.getItem('Todolist'));
      temp.date === new Date().toDateString()
        ? setTodolist(temp)
        : setTodolist({
            date: new Date().toDateString(),
            todoItems: [...temp.todoItems.filter((el) => !el.done)],
          });
    } else {
      localStorage.setItem('Todolist', JSON.stringify(Todolist));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('Todolist', JSON.stringify(Todolist));
  }, [Todolist]);

  function addTodo(event) {
    event.preventDefault();
    setTodolist({
      ...Todolist,
      todoItems: [
        ...Todolist.todoItems,
        {
          id: new Date().getTime(),
          title: event.target.title.value,
          done: false,
        },
      ],
    });
    event.target.title.value = '';
    event.target.title.blur();
  }

  function checkTodo(todo) {
    todo.done = !todo.done;
    setTodolist({
      ...Todolist,
      todoItems: [
        ...Todolist.todoItems.filter((el) => el.id !== todo.id),
        todo,
      ],
    });
  }

  function deleteTodo(item) {
    setTodolist({
      ...Todolist,
      todoItems: [...Todolist.todoItems.filter((el) => el.id !== item.id)],
    });
  }

  return (
    <div className="bg-white rounded-xl shadow-md pt-3 h-full min-w-min text-center">
      <h2 className="font-medium text-Grey">{t(`Dashboard.todolist`)}</h2>
      <div className="p-3 shadow-sm w-100"></div>
      <div>
        {Todolist.todoItems.length === 0
          ? null
          : Todolist.todoItems
              .sort((a, b) => a.id - b.id)
              .map((el) => {
                return (
                  <TodoItem
                    item={el}
                    key={el.id}
                    changeItem={checkTodo}
                    deleteItem={deleteTodo}
                  />
                );
              })}
        <div className="p-3 shadow-sm w-100 ">
          <div className="opacity-30 flex items-center">
            <form onSubmit={addTodo} className="w-full flex" autoComplete="off">
              <img
                className="h-5 w-5 mx-5 place-self-center cursor-pointer"
                src={Addnew}
                alt="add"
                onClick={(e) => {
                  document.getElementById('input-todo').focus();
                }}
              />
              <input
                type="text"
                id="input-todo"
                placeholder={t(`Dashboard.addTodo`)}
                name="title"
                className="w-full"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodoList;
