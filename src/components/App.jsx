import { Post } from "./Post";
import { Posts } from "./Posts";
import { SideBar } from "./SideBar";
import { Stories } from "./Stories";

function App() {
  return (
    <div className="App">
      <Stories />
      <Posts />
      <SideBar />
    </div>
  );
}

export default App;
