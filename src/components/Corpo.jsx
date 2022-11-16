import { Posts } from "./Posts";
import { SideBar } from "./SideBar";
import { Stories } from "./Stories";

function Corpo() {
  return (
    <div className="content-container">
      <main className="feed-container">
        <Stories />
        <Posts />
      </main>
      <SideBar />
    </div>
  );
}

export { Corpo };