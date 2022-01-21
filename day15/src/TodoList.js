import React, { useState, useReducer } from "react";
import { Form, Container, Button, Alert, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { FaPlus, FaTrash } from "react-icons/fa";
import todoReducer from "./reducers/todoReducer";
import TODO_ACTIONS from "./actions/todoAction";

const TodoList = () => {
  const intialData = JSON.parse(localStorage.getItem("todos"));
  const [text, setText] = useState("");

  const [state, dispatch] = useReducer(todoReducer, [...intialData]);
  //Format:
  // [

  //   {
  //     data: "todo ",
  //     date: " current date"
  //     isCompleted:"true/false"
  //   }
  // ]

  return (
    <Container className="mt-3 text-center">
      <h3>TodoList App</h3>
      <Form.Control
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyPress={(e) =>
          e.key === "Enter" &&
          dispatch({
            type: TODO_ACTIONS.ADD_TODO,
            payloads: { text, setText },
          })
        }
      />

      <br />

      <Button
        onClick={() =>
          dispatch({
            type: TODO_ACTIONS.ADD_TODO,
            payloads: { text, setText },
          })
        }
      >
        <FaPlus />
        <label className="ms-2">Add</label>
      </Button>

      <br />
      <br />

      {state.length > 0
        ? state.map((todo, index) => {
            return (
              <Row>
                <Col xs={10}>
                  <Alert
                    variant={todo.isCompleted ? "danger" : "primary"}
                    className="text-start"
                    style={{
                      cursor: "pointer",
                      textDecoration: todo.isCompleted
                        ? "line-through"
                        : "none",
                    }}
                    onClick={() =>
                      dispatch({
                        type: TODO_ACTIONS.TOGGLE_TODO,
                        payloads: { index },
                      })
                    }
                  >
                    <h3>{todo.data}</h3>

                    <small>{todo.date}</small>
                  </Alert>
                </Col>

                <Col className="mt-4">
                  <FaTrash
                    size="40"
                    color="red"
                    onClick={() =>
                      dispatch({
                        type: TODO_ACTIONS.DELETE_TODO,
                        payloads: { index },
                      })
                    }
                  />
                </Col>
              </Row>
            );
          })
        : "No todos"}
    </Container>
  );
};

export default TodoList;
