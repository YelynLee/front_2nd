//import Button from "./Button";
//import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const onClick = () => setCounter((current) => current+1);

  const [keyword, setKeyword] = useState("");
  const onChange = (event) => setKeyword(event.target.value);
  
  console.log("i run all the time");

  useEffect(() => {
    console.log("I run only once");
  }, []);
  useEffect(() => {
    if(keyword !== "" && keyword.length > 5) {
      console.log("I run when 'keyword' changes");
    }
  }, [keyword])
  useEffect(() => {
    console.log("I run when 'counter' changes");
  }, [counter]);
  useEffect(() => {
    console.log("I run when 'keyword'&'counter' change");
  }, [keyword, counter]);

  return (
    <div>
      {/*<h1 className={styles.title}>Welcome back!</h1>
      <Button text={"Continue"} />*/}
      <input 
        value={keyword} 
        onChange={onChange} 
        type="text" 
        placeholder="Search here..." 
        //search bar를 만들 예정인데, button을 누를 때(counter라는 state value가 변화)에도 검색(render)됨
        //즉, keyword가 변할 때(keyword라는 state value가 변화)에만 특정해서 검색(render)되어야 함
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

export default App;