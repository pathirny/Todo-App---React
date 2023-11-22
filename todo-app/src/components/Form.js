// declare the form component
export default function Form(props) {
  //store the props: addNewTodo function
  const addNew = props.addTodo;
  console.log(addNew);
  // return the form element
  return (
    <form>
      <input placeholder="Enter your todo..." type="text" required></input>
      <button className="addNew" onClick={addNew}>
        Add new ToDo
      </button>
    </form>
  );
}
