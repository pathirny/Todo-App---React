import { createClient } from "@supabase/supabase-js";
import { useState, createContext } from "react";
//store supabase url and key
const supabaseUrl = "https://tmfrjacuxdesxhbblohq.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRtZnJqYWN1eGRlc3hoYmJsb2hxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA1OTA4NDcsImV4cCI6MjAxNjE2Njg0N30.0PbY1vh8Y0iN_j4-9wm9WsTi0rTf52TWvDB6RZeV-dc";
const supabase = createClient(supabaseUrl, supabaseKey);

// declare the form component
export default function Form() {
  // declare the state
  const [input, setInput] = useState("");
  // handle the submit using event
  const handleSubmit = async (event) => {
    // prevent the page from reloading
    event.preventDefault();

    const id = await supabase.auth.getUser();
    if (id) {
      console.log(id);
    }
    // const dataWithUserId = {
    //   user_id: id.data.user.id,
    //   Todo: input,
    // };
    // use supabase query to insert new row
    const { data, error } = await supabase
      .from("todos")
      .insert([{ user_id: id.data.user.id, Todo: input }])
      .select();

    if (error) {
      console.log(error.message);
    }
    if (data) {
      console.log(data);
    }
    setInput("");
  };
  // create context to pass down to todos - to enable refresh everytime a new todo is added
  const containerContext = createContext(handleSubmit);

  // return the form element
  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Enter your todo..."
        type="text"
        required
        value={input}
        onChange={(event) => setInput(event.target.value)}
      ></input>
      <button className="addNew" type="submit">
        Add new ToDo
      </button>
    </form>
  );
}
