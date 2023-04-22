import {
  StyledBox,
  StyledTextField,
  ListIcon,
  TodoInputHeading,
} from "./TodoInput.styles";
import MainButton from "../Button/Button";
import { InputAdornment } from "@mui/material";
import { useContext } from "react";
import { AppContext } from "../App/App";

const TodoInput = ({ onKeyPress }) => {
  const { inputValue, onInputChange, addTodoItem } = useContext(AppContext);

  return (
    <div>
      <StyledBox>
        <TodoInputHeading>Todo Input</TodoInputHeading>
        <StyledTextField
          value={inputValue}
          onChange={onInputChange}
          onKeyPress={onKeyPress}
          fullWidth
          autoFocus
          label="New Todo"
          id="fullWidth"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <ListIcon />
              </InputAdornment>
            ),
          }}
        />
        <MainButton
          title="new todo"
          width={560}
          bgColor={"#009688"}
          callback={addTodoItem}
        />
      </StyledBox>
    </div>
  );
};

export default TodoInput;
