//import necessary react hooks and supabase client
import React, { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

//store supabase url and key
const supabaseUrl = "https://tmfrjacuxdesxhbblohq.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRtZnJqYWN1eGRlc3hoYmJsb2hxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA1OTA4NDcsImV4cCI6MjAxNjE2Njg0N30.0PbY1vh8Y0iN_j4-9wm9WsTi0rTf52TWvDB6RZeV-dc";
const supabase = createClient(supabaseUrl, supabaseKey);
// define the todos component
export default function Todos(props) {
  const newInput = props.addNewInput;
  // console.log(newInput);

  // declare the state
  const [todo, setTodo] = useState([]);

  // async function deleteTodo(id) {
  //   let { error } = await supabase.from("todos").delete().eq("user_id", id);
  //   if (error) {
  //     console.error("Error deleting todo:", error.message);
  //   } else {
  //     // Update the local state after successful deletion
  //     setTodo((prevTodo) => prevTodo.filter((todo) => todo.user_id !== id));
  //   }
  // }

  async function deleteTodo(todo, userId) {
    // supabase query for the delete function
    let { error } = await supabase
      .from("todo_list")
      .delete()
      .eq("Todo", todo)
      .eq("user_id", userId);
    // checking if error occurs if not then filter the existing array
    if (error) {
      console.error("Error deleting todo:", error.message);
    } else {
      // Update the local state after successful deletion
      setTodo((prevTodos) => prevTodos.filter((t) => t.Todo !== todo));
    }
  }
  const [input, setInput] = useState("");

  // create edit function
  const editTodo = async (event, item) => {
    event.preventDefault();
    console.log(item);
    // update todo in the supabase database
    const { data, error } = await supabase
      .from("todo_list")
      .update({ Todo: input[item.id] }) // Use input[item.id] for the specific todo
      .eq("id", item.id)
      .select();

    if (error) {
      console.log(error);
    }
    if (data) {
      console.log(data);
    }
    // Clear the input after editing
    //this line of code updates the input state by clearing the input value for the specific todo item (item.id)
    setInput((prevInput) => ({ ...prevInput, [item.id]: "" }));
  };

  // useEffect hook for fetching the todos from supabase when component mounts
  useEffect(() => {
    // async function to fetch the todos
    const fetchTodo = async () => {
      //use supabase query to get all data
      let { data } = await supabase.from("todo_list").select();

      // console.log(data);

      //update todo state with the todo data
      setTodo(data.reverse());
    };

    // call the fetchTodo function
    fetchTodo();
  }, [newInput, input]); // empty dependecy so the useEffect activates as the component mounts

  return todo.map((item) => (
    <article key={item.id} className="individualTodo">
      <h4>{item.Todo}</h4>
      <section className="buttons">
        <form className="edit" onSubmit={(event) => editTodo(event, item)}>
          <input
            placeholder="Edit the todo..."
            type="text"
            value={input[item.id] || ""} // Use input[item.id] for the specific todo
            // when user types in the input field the input state is updated
            onChange={(event) =>
              setInput((prevInput) => ({
                ...prevInput,
                [item.id]: event.target.value,
              }))
            }
            required
          ></input>
          {/* <button className="edit" type="submit">
            Send Change
          </button> */}
        </form>
        <button onClick={() => deleteTodo(item.Todo, item.user_id)}>
          Delete
        </button>
        {/* <button onClick={() => editTodo(item, index)}>Edit</button> */}
      </section>
    </article>
  ));
}
// fix useeffect so page updates everytime new element is added/ changed
