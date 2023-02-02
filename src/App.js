import React, { useState, useCallback, useMemo } from "react";

import "./App.css";
import DemoList from "./components/Demo/DemoList";
import Button from "./components/UI/Button/Button";

function App() {
  const [listTitle, setListTitle] = useState("My List");

  const [isDec, setIsDec] = useState(false);

  const changeTitleHandler = useCallback(() => {
    setListTitle("New Title");
  }, []);

  const listItems = useMemo(() => [5, 3, 1, 10, 9], []);

  const toggleSort = () => {
    setIsDec(!isDec);
  };

  return (
    <div className="app">
      <DemoList title={listTitle} items={listItems} isDec={isDec} />
      <Button onClick={changeTitleHandler}>Change List Title</Button>
      <Button onClick={toggleSort}>
        {isDec ? "Change to Ascending Order" : " change to descending order"}
      </Button>
    </div>
  );
}

export default App;
