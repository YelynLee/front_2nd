import { useState, useEffect } from "react";

function App() {
  const [toDo, setTodo] = useState("");
  const onChange = (event) => setToDo(event.target.value);
  console.log(toDO);
  return (
    <div>
      <form>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your to do..."
        />
      </form>
    </div>
  );
}

export default App;