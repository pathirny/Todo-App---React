import Todos from "./ToDos";
import Form from "./Form";
// declare the ToDos component
export default function ToDos() {
  // this will return all of the todos in a list
  return (
    <main>
      <section className="todo-container">
        {/* individual todos will appear here */}
        <Todos />
      </section>
      <Form />
    </main>
  );
}
