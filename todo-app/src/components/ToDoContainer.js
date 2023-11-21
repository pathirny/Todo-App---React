import Todos from "./todos";

// declare the ToDos component
export default function ToDos() {
  // this will return all of the todos in a list
  return (
    <main>
      <section className="todo-container">
        {/* individual todos will appear here */}
        <Todos />
      </section>
      <button className="addNew">Add new ToDo</button>
    </main>
  );
}
