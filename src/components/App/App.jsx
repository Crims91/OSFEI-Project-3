import { useState, useEffect, createContext } from "react";
import TodoInput from "../TodoInput/TodoInput";
import TodoList from "../TodoList/TodoList";
import Modal from "../Modal/Modal";
import useLocalStorage from "../../localStorage/useLocalStorage";
import { Wrapper } from "./App.styles";

export const AppContext = createContext({});

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [inputEditValue, setInputEditValue] = useState("");
  const [editId, setEditId] = useState("");

  const [storedValue] = useLocalStorage("todos", []);

  const [todos, setTodos] = useState(storedValue);
  const [filter, setFilter] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // We get the current todo list from localStorage (if it exists)
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      // Update the todos state with the stored todo list
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  useEffect(() => {
    // Save the current todo list to localStorage whenever it updates
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // Toggle todoItem to done or undone
  const toggleTodoItem = (id) => {
    setTodos(
      todos.map((todoItem) =>
        todoItem.id === id ? { ...todoItem, done: !todoItem.done } : todoItem
      )
    );
  };

  /* 
  Add new todo item
  We set all previous todos values and one new element with current input.
  This is a rule of React - do not mutate state directly, only return new state. 
  */
  const addTodoItem = () => {
    if (inputValue.length) {
      const newId = new Date().getTime();
      const newTodos = [...todos, { id: newId, text: inputValue }];
      setTodos(newTodos);
      setInputValue("");
    }
  };

  /* 
  Remove todo item
  onRemove method has "mode" parameter, 
  which allows to reuse this method depend on situation.
  We use it for "delete all", "delete done" and "delete one"
   */
  const onRemove = (mode, id) => {
    if (mode === "done") {
      setTodos(todos.filter((todoItem) => !todoItem.done));
    } else if (mode === "all") {
      setTodos([]);
    } else {
      setTodos(todos.filter((todoItem) => todoItem.id !== id));
    }
  };

  // Filter todo items
  const onFilter = (filter) => setFilter(filter);
  // Change state of input value
  const onInputChange = (event) => setInputValue(event.target.value);

  const onEditInputChange = (event) => setInputEditValue(event.target.value);

  const onToggleModal = (show) => setOpen(show);

  const onEnter = (event, callback) =>
    event.key === "Enter" ? callback() : null;

  const onEditTodo = () => {
    if (inputEditValue.length) {
      setTodos(
        todos.map((todoItem) =>
          todoItem.id === editId
            ? { ...todoItem, text: inputEditValue }
            : todoItem
        )
      );

      setOpen(false);
      setInputEditValue("");
    }
  };

  const idPassHandler = (id) => {
    setEditId(id);
  };

  return (
    // AppContext.Provider passes value to all children components
    <AppContext.Provider
      value={{
        todos,
        inputValue,
        onInputChange,
        addTodoItem,
        toggleTodoItem,
        onFilter,
        onRemove,
        idPassHandler,
        open,
        onToggleModal,
        inputEditValue,
        onEditInputChange,
        onEditTodo,
      }}
    >
      <Wrapper>
        <TodoInput
          // On key press enter add new todo item
          onKeyPress={(event) => onEnter(event, addTodoItem)}
        />
        <TodoList
          /*
          We pass an already filtered array to be able to display only those elements of the array that passed the filter. 
          This way we keep the original array of data.
          */
          todos={todos.filter((todoItem) => {
            if (filter === "done") {
              return todoItem.done;
            } else if (filter === "undone") {
              return !todoItem.done;
            }
            return true;
          })}
        />
        <Modal onKeyPressEdit={(event) => onEnter(event, onEditTodo)} />
      </Wrapper>
    </AppContext.Provider>
  );
};

export default App;
