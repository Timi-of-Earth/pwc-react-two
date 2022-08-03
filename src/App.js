import "./App.css";
// import Counter from "./features/counter/Counter";
// import Display from "./features/counter/Display";
import Counter from "./components/Counter";
import CounterUseReducer from "./components/CounterUseReducer";
import Todo from "./components/Todo";

function App() {
  return (
    <div className="App">
      {/* <Counter />
      <Display /> */}
      {/* <Counter />
      <CounterUseReducer /> */}
      <Todo />
    </div>
  );
}

export default App;
