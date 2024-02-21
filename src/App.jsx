import "./App.css";
import Stepper from "./Stepper";

function App() {
  return (
    <>
      <div className="app">
        <Stepper totalsteps={10} />
      </div>
    </>
  );
}

export default App;
