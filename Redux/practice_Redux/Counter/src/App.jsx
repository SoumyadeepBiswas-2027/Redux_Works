import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Header } from "./Components/Header.jsx";
import { DisplayVal } from "./Components/DisplayVal.jsx";
import { Container } from "./Components/Container.jsx";
import { Controls } from "./Components/Controls.jsx";





function App() {
  return (
    
      <center className="px-4 py-5 my-5 text-center">
        <Container>
         <Header></Header>
        <div className="col-lg-6 mx-auto">
          <DisplayVal></DisplayVal>
          <Controls></Controls>
        </div>
        </Container>
      </center>
    
  );
}

export default App;
