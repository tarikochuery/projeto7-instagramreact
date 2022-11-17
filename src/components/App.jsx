import { Corpo } from "./Corpo";
import { MenuFooter } from "./MenuFooter";
import { NavBar } from "./NavBar";

function App() {
  return (
    <div className="container">
      <NavBar />
      <Corpo />
      <MenuFooter />
    </div>
  );
}

export default App;
