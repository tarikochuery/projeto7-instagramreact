import { Post } from "./Post";
import { SideBar } from "./SideBar";
import { Stories } from "./Stories";

function App() {
  return (
    <div className="App">
      <Stories />
      <SideBar />
      <Post author={{username: 'meowed', image:'assets/stories-images/meowed.png'}} postImage='assets/posts-images/gato-telefone.png'/>
    </div>
  );
}

export default App;
