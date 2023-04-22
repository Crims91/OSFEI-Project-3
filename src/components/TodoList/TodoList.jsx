import { useContext } from "react";
import { AppContext } from "../App/App";
import MainButton from "../Button/Button";
import TodoItem from "../TodoItem/TodoItem";
import { StyledWrapper, TodoListHeading, StyledList } from "./TodoList.styles";

const TodoList = ({ todos }) => {
  const { onFilter, onRemove } = useContext(AppContext);

  // Check if there are no todos to display delete buttons
  const displayDeleteButtons = !todos.length ? "none" : "";

  // Handle filter button click
  const handleFilterClick = (filterType) => {
    onFilter(filterType);
  };

  // Handle delete button click
  const handleDeleteClick = (deleteType) => {
    onRemove(deleteType);
  };

  return (
    <div>
      <TodoListHeading>Todo List</TodoListHeading>

      {/* Filter buttons */}
      <StyledWrapper>
        {[
          { title: "All", filter: "all" },
          { title: "Done", filter: "done" },
          { title: "Todo", filter: "undone" },
        ].map(({ title, filter }) => (
          <MainButton
            key={title}
            title={title}
            width={180}
            bgColor={"#009688"}
            callback={() => handleFilterClick(filter)}
          />
        ))}
      </StyledWrapper>

      {/* Todo list */}
      <StyledList>
        {todos.map(({ id, text, done }) => (
          <TodoItem key={id} id={id} text={text} done={done} />
        ))}
      </StyledList>
      {/* Delete buttons */}
      <StyledWrapper>
        {[
          { title: "Delete Done Tasks", delete: "done" },
          { title: "Delete All Tasks", delete: "all" },
        ].map(({ title, delete: deleteType }) => (
          <MainButton
            key={title}
            title={title}
            width={230}
            bgColor={"#d32f2f"}
            callback={() => handleDeleteClick(deleteType)}
            display={displayDeleteButtons}
          />
        ))}
      </StyledWrapper>
    </div>
  );
};

export default TodoList;
