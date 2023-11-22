// declare the form component
export default function Form() {
  // return the form element
  return (
    <form>
      <input placeholder="Enter your todo..." type="text" required></input>
      <button className="addNew">Add new ToDo</button>
    </form>
  );
}
