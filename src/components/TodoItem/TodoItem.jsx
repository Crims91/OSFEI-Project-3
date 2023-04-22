import {
  Checkbox,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

import { useContext } from "react";
import { AppContext } from "../App/App";

const TodoItem = ({ id, text, done }) => {
  const { onRemove, toggleTodoItem, onToggleModal, idPassHandler } =
    useContext(AppContext);
  const isChecked = done || false;

  // Checks if the todo is done and changes the style
  const completedStyles = done
    ? {
        textDecoration: "line-through",
        color: "grey",
      }
    : {};

  return (
    <ListItem
      sx={{ padding: 0, borderBottom: "1px solid grey" }}
      disablePadding
    >
      <ListItemButton>
        <ListItemIcon>
          <Checkbox
            checked={isChecked}
            label="end"
            sx={{ marginRight: "auto" }}
            onClick={() => toggleTodoItem(id)}
          />
        </ListItemIcon>
        <ListItemText primary={text} sx={completedStyles} />
        <ListItemIcon>
          <EditIcon
            onClick={() => {
              idPassHandler(id);
              onToggleModal(true);
            }}
            label="end"
            sx={{ marginRight: "auto", marginLeft: "auto" }}
          />
        </ListItemIcon>
        <ListItemIcon>
          <DeleteIcon
            onClick={() => onRemove("", id)}
            label="end"
            sx={{ marginRight: "auto ", marginLeft: "auto" }}
          />
        </ListItemIcon>
      </ListItemButton>
    </ListItem>
  );
};

export default TodoItem;
