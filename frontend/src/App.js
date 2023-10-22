import Todo from "./Todo";
function App() {
  return (
    <div>
      <header>
        The TODO App
      </header>
      <Todo task={{ title: "My first task", done: false }} />
    </div>
  );
}

export default App;
