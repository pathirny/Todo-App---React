// define the todos component
export default function Todos() {
  return (
    <article className="individualTodo">
      <h4> I need to do this</h4>
      <section className="buttons">
        <button>Edit</button>
        <button>Delete</button>
      </section>
    </article>
  );
}
