//import necessary react hooks and supabase client
import React, { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

//store supabase url and key
const supabaseUrl = "https://tmfrjacuxdesxhbblohq.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRtZnJqYWN1eGRlc3hoYmJsb2hxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA1OTA4NDcsImV4cCI6MjAxNjE2Njg0N30.0PbY1vh8Y0iN_j4-9wm9WsTi0rTf52TWvDB6RZeV-dc";
const supabase = createClient(supabaseUrl, supabaseKey);
// define the todos component
export default function Todos() {
  // declare the state
  const [todo, setTodo] = useState([]);

  // useEffect hook for fetching the todos from supabase when component mounts
  useEffect(() => {
    // async function to fetch the todos
    const fetchTodo = async () => {
      //use supabase query to get all data
      let { data } = await supabase.from("todos").select("Todo");

      console.log(data);

      //update todo state with the todo data
      setTodo(data);
    };

    // async function to add new todo
    const addNewTodo = async () => {
      // use supabase query to insert new row
      const { data } = await supabase
        .from("todos")
        .insert([{ some_column: "someValue", other_column: "otherValue" }])
        .select();
    };

    // call the fetchTodo function
    fetchTodo();
  }, []); // empty dependecy so the useEffect activates as the component mounts

  return todo.map((item, index) => (
    <article key={index} className="individualTodo">
      <h4>{item.Todo}</h4>
      <section className="buttons">
        <button>Edit</button>
        <button>Delete</button>
      </section>
    </article>
  ));
}
