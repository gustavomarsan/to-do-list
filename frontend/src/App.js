import Task from "./Task";
function App() {
  return (
    <div>
      <header>
        The TODO App
      </header>
      <Task task={{ title: "My first task", done: false }} />
    </div>
  );
}

export default App;
