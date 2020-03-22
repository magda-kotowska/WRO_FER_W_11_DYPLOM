import React from "react";
import Calendar from "./calendar";
import ToDoList from "./to_do_list"


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header>
          <ToDoList/>
        </header>
        <main>
          <Calendar/>
        </main>
        <footer>
        </footer>
      </div>
    );
  }
}

export default App;