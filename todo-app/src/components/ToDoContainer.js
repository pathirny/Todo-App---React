import Todos from "./ToDos";
import Form from "./Form";
import { createClient } from "@supabase/supabase-js";

//store supabase url and key
const supabaseUrl = "https://tmfrjacuxdesxhbblohq.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRtZnJqYWN1eGRlc3hoYmJsb2hxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA1OTA4NDcsImV4cCI6MjAxNjE2Njg0N30.0PbY1vh8Y0iN_j4-9wm9WsTi0rTf52TWvDB6RZeV-dc";
const supabase = createClient(supabaseUrl, supabaseKey);
// declare the ToDos component
export default function ToDos() {
  // async function to add new todo
  const addNewTodo = async () => {
    // use supabase query to insert new row
    const { data } = await supabase
      .from("todos")
      .insert([{ some_column: "someValue", other_column: "otherValue" }])
      .select();
  };
  // this will return all of the todos in a list
  return (
    <main>
      <section className="todo-container">
        {/* individual todos will appear here */}
        <Todos />
      </section>
      <Form addTodo={addNewTodo} />
    </main>
  );
}
