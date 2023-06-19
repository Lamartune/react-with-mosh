import { Children } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  return (
    <div>
      <Alert>
        Hello <span>Worldd</span> World!
      </Alert>
      <Button onClick={() => console.log("clicked")}>My Button</Button>
    </div>
  );
}

export default App;
