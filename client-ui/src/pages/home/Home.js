import TopBar from "../../components/topBar/TopBar";
import SideBar from "../../components/sideBar/SideBar";
import RightBar from "../../components/rightBar/RightBar";
import Feed from "../../components/feed/Feed";

export default function Home() {
    return (
      <>
        <TopBar />
        <div className="homeContainer">
          <SideBar />
          <Feed/>
          <RightBar/>
      </div>
      </>
    );
  }