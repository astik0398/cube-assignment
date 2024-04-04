import logo from "./logo.svg";
import "./App.css";
import CustomerList from "./CustomerList";
import CustomerDetails from "./CustomerDetails";
import { useState } from "react";

function App() {
  const [customers, setCustomers] = useState(
    new Array(100).fill().map((_, index) => `Customer ${index + 1}`)
  );
  const [activeIndex, setActiveIndex] = useState(0);

  function handleActiveDiv(index) {
    setActiveIndex(index);
  }

  return (
    <div
      style={{ display: "flex", justifyContent: "space-around" }}
      className="App"
    >
      <div
        style={{
          width: "30%",
          overflowY: "auto",
          maxHeight: "calc(100vh + 150px)",
        }}
      >
        <CustomerList
          customers={customers}
          activeIndex={activeIndex}
          handleActiveDiv={handleActiveDiv}
        />
      </div>
      <div style={{ width: "70%", backgroundColor: "#f9f9f9" }}>
        <CustomerDetails activeIndex={activeIndex} />
      </div>
    </div>
  );
}

export default App;
