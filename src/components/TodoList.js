import React from "react";
import { arrayOf, string, func } from "prop-types";
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton, List, ListItem, ListItemText } from '@mui/material';

const TodoList = ({ todos, removeTodo }) => (
    <List data-testid="ul-list">
        { Array.isArray(todos) && todos.map(item => {
            return (
                <ListItem
                    divider
                    key={item}
                    data-testid={item}
                    secondaryAction={
                    <IconButton 
                        edge="end"
                        aria-label="delete"
                        data-testid={`deleteTodo-${item}`}
                        onClick={() => removeTodo(item)}
                    >
                        <DeleteIcon />
                    </IconButton>
                    }
                >
                    <ListItemText primary={item} />
                </ListItem>
            )
        })}
    </List>
);

TodoList.propTypes = {
    todos: arrayOf(string),
    removeTodo: func
}

TodoList.defaultProps = {
    todos: [],
    removeTodo: () => {}  
}

export default TodoList;